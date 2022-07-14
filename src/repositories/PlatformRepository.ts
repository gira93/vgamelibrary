import { db, type Platform } from '@/db'
import type { IndexableType } from 'dexie'

export class PlatformRepository {
  index(): Promise<Platform[]> {
    return db.platforms.toArray()
  }
  get(id: IndexableType): Promise<Platform | undefined> {
    return db.platforms.get(id)
  }
  create(platform: Platform): Promise<IndexableType> {
    return db.platforms.add(platform)
  }
  update(id: IndexableType, platform: Platform): Promise<number> {
    return db.platforms.update(id, platform)
  }
  delete(ids: IndexableType[]): Promise<void> {
    return db.platforms.bulkDelete(ids)
  }
}
