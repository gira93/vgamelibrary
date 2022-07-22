import { db, type Platform } from '@/db'
import type { IndexableType } from 'dexie'

export class PlatformRepository {
  index(): Promise<Platform[]> {
    return db.platforms.toArray()
  }
  get(id: IndexableType): Promise<Platform | undefined> {
    return db.platforms.get(id)
  }
  getByName(name: string) {
    return db.platforms.get({ name })
  }
  create(platform: Platform): Promise<IndexableType> {
    return db.platforms.add(platform)
  }
  bulkCreate(platforms: Platform[]): Promise<IndexableType> {
    return db.platforms.bulkAdd(platforms)
  }
  update(id: IndexableType, platform: Platform): Promise<number> {
    return db.platforms.update(id, platform)
  }
  delete(ids: IndexableType[]): Promise<void> {
    return db.platforms.bulkDelete(ids)
  }
}
