<script setup lang="ts">
import type { Game } from '@/db'
import { GameRepository } from '@/repositories/GameRepository'
import { computed } from 'vue'
import Modal from './Modal.vue'

const gameRepository = new GameRepository()

const emits = defineEmits(['closeDeleteGameModal'])

const props = defineProps<{
  selectedGames: Game[]
}>()

const isSingleDelete = computed<boolean>(() => props.selectedGames.length <= 1)

const deleteGameFromDb = async () => {
  const gameIds = props.selectedGames.map((g) => g.id).filter((g): g is number => !!g)
  await gameRepository.delete(gameIds)
  emits('closeDeleteGameModal')
}
</script>

<template>
  <Modal
    :title="isSingleDelete ? 'Delete game' : 'Delete games'"
    :confirmText="'Ok'"
    :cancelText="'Cancel'"
    @cancelModal="$emit('closeDeleteGameModal')"
    @confirmModal="deleteGameFromDb"
  >
    <span v-if="isSingleDelete"> Do you want to remove {{ selectedGames[0].name }}? </span>
    <span v-else>Do you want to remove the selected {{ selectedGames.length }} games?</span>
  </Modal>
</template>
