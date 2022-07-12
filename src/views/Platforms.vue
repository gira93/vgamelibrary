<script setup lang="ts">
import { reactive, ref } from 'vue'
import type { Ref } from 'vue'
import CreateEditPlatformModal from '@/components/CreateEditPlatformModal.vue'
import { db } from '@/db'
import type { Platform } from '@/db'

const state = reactive({
  isAddNewModalOpen: false,
  isDeleteModalOpen: false,
  isEditModalOpen: false
})
const platforms: Ref<Platform[]> = ref([])

const listAllPlatforms = async () => {
  platforms.value = await db.platforms.toArray()
}
listAllPlatforms()

const handleCloseAddNewModal = (reloadList: boolean) => {
  if (reloadList) listAllPlatforms()
  state.isAddNewModalOpen = false
}
</script>

<template>
  <div class="container">
    <div class="columns is-multiline">
      <div class="column is-12 has-text-right">
        <button class="button is-primary" @click="() => (state.isAddNewModalOpen = true)">
          Add new
        </button>
      </div>
      <div class="column is-12">
        <table class="platforms-table table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>Platform</th>
              <th class="platforms-table__header-column has-text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="platform in platforms" :key="platform.id">
              <td>{{ platform.name }}</td>
              <td class="has-text-right">
                <button class="button is-primary is-small">Edit</button>
                <button class="button is-danger is-small">Delete</button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- AddNewModal -->
  <CreateEditPlatformModal
    v-if="state.isAddNewModalOpen"
    :title="'Add new platform'"
    @closePlatformModal="handleCloseAddNewModal"
    @savePlatformModal="handleCloseAddNewModal(true)"
  />
</template>

<style lang="scss">
.platforms-table {
  &__header-column {
    width: 10%;
    min-width: 140px;
  }
}
</style>
