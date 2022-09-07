<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import { db } from '@/db'
import { GameRepository } from '@/repositories/GameRepository'
import { Csv } from '@/services/Csv'
import { ExportImport } from '@/services/ExportImport'
import { ref, type Ref } from 'vue'

const csv = new Csv()
const exportImport = new ExportImport()
const gameRepository = new GameRepository()

const isPurgeModalOpen: Ref<boolean> = ref(false)
const isImportLoading: Ref<boolean> = ref(false)

const purgeDatabase = async () => {
  await db.delete()
  await db.open()
  isPurgeModalOpen.value = false
}

const exportCsv = async () => {
  const games = await gameRepository.index(true)
  csv.downloadGamesCsv(games)
}

const readCsvFromFile = (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.onload = async () => {
      try {
        isImportLoading.value = true
        await csv.importGamesCsv(reader.result as string)
        isImportLoading.value = false
        window.alert('Games imported successfully')
      } catch (error) {
        isImportLoading.value = false
        window.alert(error)
      }
    }
    reader.readAsText(file)
  }
}

const saveJson = async () => {
  const blob = await exportImport.exportJson()
  const link = document.createElement('a')
  link.setAttribute('href', window.URL.createObjectURL(blob))
  const today = new Date().toISOString().split('T')[0]
  const fileName = `vgamelibrary-${today}.json`
  link.setAttribute('download', fileName)
  document.body.appendChild(link)

  link.click()
}

const readJson = async (event: Event) => {
  const target = event.target as HTMLInputElement
  const file = target.files?.[0]
  if (file) {
    const reader = new FileReader()
    reader.readAsArrayBuffer(file)
    reader.onload = async () => {
      try {
        isImportLoading.value = true
        // eslint-disable-next-line no-undef
        const blob = new Blob([reader.result as BlobPart])
        await exportImport.importJson(blob)
        isImportLoading.value = false
        window.alert('DB imported successfully')
      } catch (error) {
        isImportLoading.value = false
        window.alert(error)
      }
    }
  }
}
</script>

<template>
  <div class="container is-padded-mobile">
    <h2 class="title is-3">Export / Import</h2>
    <div class="utilities-buttons mb-3">
      <button class="button is-primary mr-3" @click="saveJson">Export JSON</button>
      <div v-if="!isImportLoading" class="file is-primary is-inline-block">
        <label class="file-label">
          <input class="file-input" type="file" name="resume" accept=".json" @change="readJson" />
          <span class="file-cta">
            <span class="file-label">Import JSON</span>
          </span>
        </label>
      </div>
      <button v-if="isImportLoading" class="button is-primary is-loading is-disabled"></button>
    </div>

    <div class="utilities-buttons">
      <button class="button is-primary mr-3" @click="exportCsv">Export CSV</button>
      <div v-if="!isImportLoading" class="file is-primary is-inline-block">
        <label class="file-label">
          <input
            class="file-input"
            type="file"
            name="resume"
            accept=".csv"
            @change="readCsvFromFile"
          />
          <span class="file-cta">
            <span class="file-label">Import CSV</span>
          </span>
        </label>
      </div>
      <button v-if="isImportLoading" class="button is-primary is-loading is-disabled"></button>
    </div>

    <h2 class="title is-3 mt-5">Destructive zone</h2>
    <div class="destructive-buttons">
      <button class="button is-danger" @click="() => (isPurgeModalOpen = true)">DELETE ALL</button>
    </div>
  </div>

  <Modal
    v-if="isPurgeModalOpen"
    :title="'Delete all'"
    :confirmText="'Ok'"
    :cancelText="'Cancel'"
    @cancelModal="() => (isPurgeModalOpen = false)"
    @confirmModal="purgeDatabase"
  >
    <span>Do you want to DELETE ALL DATA from the DB?</span>
  </Modal>
</template>
