<script setup lang="ts">
import type { Platform } from '@/db'
import Modal from './Modal.vue'
import { onMounted, ref, type Ref } from 'vue'
import { PlatformRepository } from '@/repositories/PlatformRepository'

const platformRepository = new PlatformRepository()

const emit = defineEmits(['closePlatformModal', 'savePlatformModal'])

const props = defineProps<{
  platformEdit: Platform | null
}>()

const platform: Ref<Platform> = ref({ name: '' })

const savePlatformToDb = async () => {
  const { name } = platform.value
  if (name !== '') {
    try {
      if (props.platformEdit && props.platformEdit.id) {
        await platformRepository.update(props.platformEdit.id, { name })
      } else {
        await platformRepository.create({ name })
      }
      emit('savePlatformModal')
    } catch (error) {
      window.alert(error)
    }
  }
}

onMounted(() => {
  if (props.platformEdit) {
    platform.value.name = props.platformEdit.name
  }
})
</script>

<template>
  <Modal
    :title="platformEdit ? 'Update platform' : 'Add new platform'"
    :confirmText="'Save'"
    :cancelText="'Cancel'"
    @cancelModal="$emit('closePlatformModal')"
    @confirmModal="savePlatformToDb"
  >
    <form @submit.prevent="savePlatformToDb">
      <div class="field">
        <label class="label">Platform name</label>
        <div class="control">
          <input v-model="platform.name" class="input" type="text" />
        </div>
      </div>
    </form>
  </Modal>
</template>
