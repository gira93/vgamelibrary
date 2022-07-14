<script setup lang="ts">
import Modal from '@/components/Modal.vue'
import { db } from '@/db'
import { GameRepository } from '@/repositories/GameRepository'
import { Csv } from '@/services/Csv'
import { ref, type Ref } from 'vue'

const csv = new Csv()
const gameRepository = new GameRepository()

const isPurgeModalOpen: Ref<boolean> = ref(false)

const purgeDatabase = async () => {
  await db.delete()
  await db.open()
  isPurgeModalOpen.value = false
}

const exportCsv = async () => {
  const games = await gameRepository.index(true)
  csv.downloadGamesCsv(games)
}
</script>

<template>
  <div class="container">
    <h1 class="title">Utilities</h1>
    <div class="utilities-buttons">
      <button class="button is-primary mr-3" @click="exportCsv">Export CSV</button>
      <button class="button is-primary">Import CSV</button>
    </div>
    <div class="destructive-buttons mt-6">
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
