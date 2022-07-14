import { db, type Game, type GameWithAssociation } from '@/db'
import type { IndexableType } from 'dexie'

export class GameRepository {
  async index(includeAssociations = false): Promise<Game[] | GameWithAssociation[]> {
    if (includeAssociations) {
      const initialGames: Game[] = await db.games.toArray()
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
  update(id: IndexableType, game: Game): Promise<number> {
    return db.games.update(id, game)
  }
  delete(ids: IndexableType[]): Promise<void> {
    return db.games.bulkDelete(ids)
  }
}
