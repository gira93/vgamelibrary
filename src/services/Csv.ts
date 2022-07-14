import type { GameWithAssociation } from '@/db'

const generateGamesCsv = (games: GameWithAssociation[]): string => {
  const header = ['name', 'platform']
  const rows = games.map((game) => [`"${game.name}"`, `"${game.platform?.name}"`])

  return 'data:text/csv;charset=utf-8,' + header + '\n' + rows.map((e) => e.join(',')).join('\n')
}

export class Csv {
  downloadGamesCsv(games: GameWithAssociation[]) {
    const csv = generateGamesCsv(games)

    const encodedUri = encodeURI(csv)
    const link = document.createElement('a')
    link.setAttribute('href', encodedUri)
    link.setAttribute('download', 'games.csv')
    document.body.appendChild(link)

    link.click()
  }
}
