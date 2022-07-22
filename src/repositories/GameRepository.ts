import { db, type Game, type GameWithAssociation } from '@/db'
import type { IndexableType } from 'dexie'

export class GameRepository {
  async index(
    includeAssociations = false,
    where: { platformId: number } | null = null
  ): Promise<Game[] | GameWithAssociation[]> {
    if (includeAssociations) {
      let initialGames: Game[]
      if (where) {
        initialGames = await db.games.where(where).sortBy('name')
      } else {
        initialGames = await db.games.orderBy('name').toArray()
      }
      return Promise.all(
        initialGames.map(async (game) => ({
          ...game,
          platform: await db.platforms.get(game.platformId)
        }))
      )
    }
    return db.games.toArray()
  }
  get(id: IndexableType): Promise<Game | undefined> {
    return db.games.get(id)
  }
  create(game: Game): Promise<IndexableType> {
    return db.games.add(game)
  }
  bulkCreate(games: Game[]): Promise<IndexableType> {
    return db.games.bulkAdd(games)
  }
  update(id: IndexableType, game: Game): Promise<number> {
    return db.games.update(id, game)
  }
  delete(ids: IndexableType[]): Promise<void> {
    return db.games.bulkDelete(ids)
  }
}
