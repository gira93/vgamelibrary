<script setup lang="ts">
import { db, type Platform } from '@/db'
import { computed } from 'vue'
import Modal from './Modal.vue'

const emits = defineEmits(['closeDeletePlatformModal'])

const props = defineProps<{
  selectedPlatforms: Platform[]
}>()

const isSingleDelete = computed<boolean>(() => props.selectedPlatforms.length <= 1)

const deletePlatformFromDb = async () => {
  const platformIds = props.selectedPlatforms.map((p) => p.id).filter((p): p is number => !!p)
  await db.platforms.bulkDelete(platformIds)
  emits('closeDeletePlatformModal')
}
</script>

<template>
  <Modal
    :title="isSingleDelete ? 'Delete platform' : 'Delete platforms'"
    :confirmText="'Ok'"
    :cancelText="'Cancel'"
    @cancelModal="$emit('closeDeletePlatformModal')"
    @confirmModal="deletePlatformFromDb"
  >
    <span v-if="isSingleDelete"> Do you want to remove {{ selectedPlatforms[0].name }}? </span>
    <span v-else>Do you want to remove the selected {{ selectedPlatforms.length }} platforms?</span>
  </Modal>
</template>
