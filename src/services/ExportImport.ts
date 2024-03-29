import { db } from '@/db'
import type Dexie from 'dexie'
// Needed because missing type declaration for plugin
// @ts-ignore
import { importDB, exportDB } from 'dexie-export-import'

export class ExportImport {
  exportJson(): Promise<Blob> {
    return exportDB(db, {
      prettyJson: true
    })
  }

  async importJson(blob: Blob): Promise<Dexie> {
    // Clear db before starting
    await db.delete()
    await db.open()
    return importDB(blob)
  }
}
