import Dexie from 'dexie'
import type { Table } from 'dexie'

export interface Platform {
  id?: number
  name: string
}

export interface Game {
  id?: number
  name: string
  platformId: number
}

export interface GameWithAssociation extends Game {
  platform?: Platform
}

export class LocalDB extends Dexie {
  platforms!: Table<Platform>
  games!: Table<Game>

  constructor() {
    super('gameLibrary')

    this.version(1).stores({
      platforms: '++id, &name',
      games: '++id, name, platformId'
    })
  }
}

export const db = new LocalDB()
