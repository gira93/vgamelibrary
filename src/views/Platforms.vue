<script setup lang="ts">
import { onMounted, reactive, ref, type Ref } from 'vue'
import CreateEditPlatformModal from '@/components/CreateEditPlatformModal.vue'
import DeletePlatformModal from '@/components/DeletePlatformModal.vue'
import type { Platform } from '@/db'
import { computed } from 'vue'
import { PlatformRepository } from '@/repositories/PlatformRepository'

const platformRepository = new PlatformRepository()

const modals = reactive({
  isAddNewModalOpen: false,
  isDeleteModalOpen: false
})
const platforms: Ref<Platform[]> = ref([])
const selectedPlatforms: Ref<Platform[]> = ref([])
const tableSelection: Ref<number[]> = ref([])

const isAllSelected = computed<boolean>(() => {
  if (platforms.value.length === 0) return false
  return tableSelection.value.length === platforms.value.length
})

const listAllPlatforms = async () => {
  platforms.value = await platformRepository.index()
}
const handleCloseAddNewModal = (reloadList: boolean) => {
  if (reloadList) listAllPlatforms()
  selectedPlatforms.value = []
  modals.isAddNewModalOpen = false
}
const handleOpenEditModal = (platform: Platform) => {
  selectedPlatforms.value = [{ ...platform }]
  modals.isAddNewModalOpen = true
}
const handleOpenDeleteModal = (platform: Platform) => {
  selectedPlatforms.value = [{ ...platform }]
  modals.isDeleteModalOpen = true
}
const handleOpenDeleteBulkModal = () => {
  selectedPlatforms.value = platforms.value.filter(
    (p) => p.id && tableSelection.value.includes(p.id)
  )
  modals.isDeleteModalOpen = true
}
const handleCloseDeleteModal = () => {
  listAllPlatforms()
  selectedPlatforms.value = []
  tableSelection.value = []
  modals.isDeleteModalOpen = false
}
const handleSelectAllTable = () => {
  if (isAllSelected.value) {
    tableSelection.value = []
  } else {
    tableSelection.value = platforms.value.map((p) => p.id).filter((p): p is number => !!p)
  }
}

onMounted(() => {
  listAllPlatforms()
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

      <div class="column is-12">Total items: {{ platforms.length }}</div>

      <div class="column is-12">
        <table class="custom-table table is-striped is-fullwidth">
          <thead>
            <tr>
              <th class="custom-table__header-selection">
                <label class="checkbox">
                  <input type="checkbox" :checked="isAllSelected" @change="handleSelectAllTable" />
                </label>
              </th>
              <th>Platform</th>
              <th class="custom-table__header-actions has-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="platform in platforms"
              :key="platform.id"
              :class="{ 'is-selected': platform.id && tableSelection.includes(platform.id) }"
            >
              <td>
                <label class="checkbox">
                  <input type="checkbox" :value="platform.id" v-model="tableSelection" />
                </label>
              </td>
              <td>{{ platform.name }}</td>
              <td class="has-text-right">
                <button
                  class="button is-primary is-small is-hidden-touch mr-3"
                  @click="handleOpenEditModal(platform)"
                >
                  Edit
                </button>
                <button
                  class="button is-primary is-small mr-3 is-hidden-desktop"
                  @click="handleOpenEditModal(platform)"
                >
                  <span class="icon is-small">
                    <font-awesome-icon icon="fa-regular fa-pen-to-square" />
                  </span>
                </button>
                <button
                  class="button is-danger is-small is-hidden-touch"
                  @click="handleOpenDeleteModal(platform)"
                >
                  Delete
                </button>
                <button
                  class="button is-danger is-small is-hidden-desktop"
                  @click="handleOpenDeleteModal(platform)"
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

  <CreateEditPlatformModal
    v-if="modals.isAddNewModalOpen"
    :platformEdit="selectedPlatforms[0]"
    @closePlatformModal="handleCloseAddNewModal"
    @savePlatformModal="handleCloseAddNewModal(true)"
  />
  <DeletePlatformModal
    v-if="modals.isDeleteModalOpen"
    :selectedPlatforms="selectedPlatforms"
    @closeDeletePlatformModal="handleCloseDeleteModal"
  />
</template>
