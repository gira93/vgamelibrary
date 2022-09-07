<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue'
import CreateEditGameModal from '@/components/CreateEditGameModal.vue'
import DeleteGameModal from '@/components/DeleteGameModal.vue'
import GamesFilters from '@/components/GamesFilters.vue'
import type { Game, GameWithAssociation } from '@/db'
import { computed } from 'vue'
import { GameRepository } from '@/repositories/GameRepository'

interface Filters {
  platformId: number | null
  gameName: string
}

const gameRepository = new GameRepository()

const modals = reactive({
  isAddNewModalOpen: false,
  isDeleteModalOpen: false
})
const games: Ref<GameWithAssociation[]> = ref([])
const selectedGames: Ref<Game[]> = ref([])
const tableSelection: Ref<number[]> = ref([])
const filters: Filters = reactive({
  platformId: null,
  gameName: ''
})

const isAllSelected = computed<boolean>(() => {
  if (games.value.length === 0) return false
  return tableSelection.value.length === games.value.length
})

const listAllGames = async () => {
  const initialGames = await gameRepository.index(
    true,
    filters.platformId ? { platformId: filters.platformId } : null
  )
  if (filters.gameName !== '') {
    games.value = initialGames.filter((g) => new RegExp(filters.gameName, 'i').test(g.name))
  } else {
    games.value = initialGames
  }
}
const handleCloseAddNewModal = (reloadList: boolean) => {
  if (reloadList) listAllGames()
  selectedGames.value = []
  modals.isAddNewModalOpen = false
}
const handleOpenEditModal = (game: Game) => {
  selectedGames.value = [{ ...game }]
  modals.isAddNewModalOpen = true
}
const handleOpenDeleteModal = (game: Game) => {
  selectedGames.value = [{ ...game }]
  modals.isDeleteModalOpen = true
}
const handleOpenDeleteBulkModal = () => {
  selectedGames.value = games.value.filter((g) => g.id && tableSelection.value.includes(g.id))
  modals.isDeleteModalOpen = true
}
const handleCloseDeleteModal = () => {
  listAllGames()
  selectedGames.value = []
  tableSelection.value = []
  modals.isDeleteModalOpen = false
}
const handleSelectAllTable = () => {
  if (isAllSelected.value) {
    tableSelection.value = []
  } else {
    tableSelection.value = games.value.map((g) => g.id).filter((g): g is number => !!g)
  }
}

onMounted(() => {
  listAllGames()
})
</script>

<template>
  <div class="container is-padded-mobile">
    <div class="columns is-multiline">
      <div class="column is-12 has-text-right">
        <button
          class="button is-danger mr-3"
          @click="handleOpenDeleteBulkModal"
          :disabled="tableSelection.length === 0"
        >
          Delete selection
        </button>
        <button class="button is-primary" @click="() => (modals.isAddNewModalOpen = true)">
          Add new
        </button>
      </div>

      <GamesFilters
        v-model:platformId="filters.platformId"
        v-model:gameName="filters.gameName"
        @updateTrigger="listAllGames"
      />

      <div class="column is-12">
        <table class="custom-table table is-striped is-fullwidth">
          <thead>
            <tr>
              <th class="custom-table__header-selection">
                <label class="checkbox">
                  <input type="checkbox" :checked="isAllSelected" @change="handleSelectAllTable" />
                </label>
              </th>
              <th>Game</th>
              <th class="is-hidden-touch">Platform</th>
              <th class="custom-table__header-actions has-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="game in games"
              :key="game.id"
              :class="{ 'is-selected': game.id && tableSelection.includes(game.id) }"
            >
              <td>
                <label class="checkbox">
                  <input type="checkbox" :value="game.id" v-model="tableSelection" />
                </label>
              </td>
              <td>
                <span class="is-block">{{ game.name }}</span>
                <span class="is-hidden-desktop is-italic">{{ game.platform?.name }}</span>
              </td>
              <td class="is-hidden-touch">{{ game.platform?.name }}</td>
              <td class="has-text-right">
                <button
                  class="button is-primary is-small is-hidden-touch mr-3"
                  @click="handleOpenEditModal(game)"
                >
                  Edit
                </button>
                <button
                  class="button is-primary is-small mr-3 is-hidden-desktop"
                  @click="handleOpenEditModal(game)"
                >
                  <span class="icon is-small">
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                  </span>
                </button>
                <button
                  class="button is-danger is-small is-hidden-touch"
                  @click="handleOpenDeleteModal(game)"
                >
                  Delete
                </button>
                <button
                  class="button is-danger is-small is-hidden-desktop"
                  @click="handleOpenDeleteModal(game)"
                >
                  <span class="icon is-small">
                    <font-awesome-icon icon="fa-regular fa-trash-can" />
                  </span>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <CreateEditGameModal
    v-if="modals.isAddNewModalOpen"
    :gameEdit="selectedGames[0]"
    @closeGameModal="handleCloseAddNewModal"
    @saveGameModal="handleCloseAddNewModal(true)"
  />
  <DeleteGameModal
    v-if="modals.isDeleteModalOpen"
    :selectedGames="selectedGames"
    @closeDeleteGameModal="handleCloseDeleteModal"
  />
</template>
