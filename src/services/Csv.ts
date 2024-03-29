import { db, type GameWithAssociation } from '@/db'
import { GameRepository } from '@/repositories/GameRepository'
import { PlatformRepository } from '@/repositories/PlatformRepository'

const generateGamesCsv = (games: GameWithAssociation[]): string => {
  const header = ['name', 'platform']
  const rows = games.map((game) => [`"${game.name}"`, `"${game.platform?.name}"`])

  return header + '\n' + rows.map((e) => e.join(',')).join('\n')
}

const extractPlatformsFromGames = (games: Partial<GameWithAssociation>[]) => {
  const uniquePlatforms = Array.from(new Set(games.map((g) => g.platform?.name || '')))
  return uniquePlatforms.map((p) => ({ name: p }))
}

const saveGamesToDb = async (games: Partial<GameWithAssociation>[]) => {
  // Clear db before starting
  await db.delete()
  await db.open()
  const platformRepository = new PlatformRepository()
  const gameRepository = new GameRepository()

  const platforms = extractPlatformsFromGames(games)

  try {
    await platformRepository.bulkCreate(platforms)

    await Promise.all(
      games.map(async (game) => {
        let platform = null
        if (game.platform?.name) {
          platform = await platformRepository.getByName(game.platform?.name)
        }
        if (game.name && platform?.id) {
          return await gameRepository.create({
            name: game.name,
            platformId: platform.id
          })
        }
        throw Error('Game name or platform not found')
      })
    )
    return true
  } catch (error) {
    throw (error as Error).message
  }
}

export class Csv {
  downloadGamesCsv(games: GameWithAssociation[]) {
    const csv = generateGamesCsv(games)

    const blob = new Blob([csv], { type: 'text/csv' })
    const link = document.createElement('a')
    link.setAttribute('href', window.URL.createObjectURL(blob))
    link.setAttribute('download', 'games.csv')
    document.body.appendChild(link)

    link.click()
  }

  importGamesCsv(csv: string): Promise<boolean> {
    const rows = csv.slice(csv.indexOf('\n') + 1).split(/\r?\n/)
    const games: Partial<GameWithAssociation>[] = rows.map((row) => {
      const values = row.split('","')
      return {
        name: values[0].replace('"', ''),
        platform: { name: values[1].replace('"', '') }
      }
    })
    return saveGamesToDb(games)
  }
}
