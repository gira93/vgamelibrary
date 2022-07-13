<script setup lang="ts">
import { db } from '@/db'
import Modal from './Modal.vue'
import { reactive } from 'vue'

const emit = defineEmits(['closePlatformModal', 'savePlatformModal'])

const state = reactive({
  platformName: ''
})

const savePlatformToDb = async () => {
  const { platformName } = state
  if (platformName !== '') {
    try {
      await db.platforms.add({ name: platformName })
      emit('savePlatformModal')
    } catch (error) {
      window.alert(error)
    }
  }
}
</script>

<template>
  <Modal
    :title="'Add new platform'"
    :confirmText="'Save'"
    :cancelText="'Cancel'"
    @cancelModal="$emit('closePlatformModal')"
    @confirmModal="savePlatformToDb"
  >
    <div class="field">
      <label class="label">Platform name</label>
      <div class="control">
        <input v-model="state.platformName" class="input" type="text" />
      </div>
    </div>
  </Modal>
</template>
