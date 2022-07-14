<script setup lang="ts">
import { db, type Game, type Platform } from '@/db'
import Modal from './Modal.vue'
import { onMounted, ref, type Ref } from 'vue'

const emit = defineEmits(['closeGameModal', 'saveGameModal'])

const props = defineProps<{
  gameEdit: Game | null
}>()

const game: Ref<Game> = ref({ name: '', platformId: 0 })
const platforms: Ref<Platform[]> = ref([])

const saveGameToDb = async () => {
  const { name, platformId } = game.value
  if (name !== '') {
    try {
      if (props.gameEdit && props.gameEdit.id) {
        await db.games.update(props.gameEdit.id, { name, platformId })
      } else {
        await db.games.add({ name, platformId })
      }
      emit('saveGameModal')
    } catch (error) {
      window.alert(error)
    }
  }
}

const listAllPlatforms = async () => {
  platforms.value = await db.platforms.toArray()
}

onMounted(async () => {
  await listAllPlatforms()
  if (platforms.value[0]?.id) game.value.platformId = platforms.value[0].id
  if (props.gameEdit) {
    game.value = {
      name: props.gameEdit.name,
      platformId: props.gameEdit.platformId
    }
  }
})
</script>

<template>
  <Modal
    :title="gameEdit ? 'Update game' : 'Add new game'"
    :confirmText="'Save'"
    :cancelText="'Cancel'"
    @cancelModal="$emit('closeGameModal')"
    @confirmModal="saveGameToDb"
  >
    <form @submit.prevent="saveGameToDb">
      <div class="field">
        <label class="label">Game name</label>
        <div class="control">
          <input v-model="game.name" class="input" type="text" />
        </div>
      </div>
      <div class="field">
        <label class="label">Platform</label>
        <div class="select is-fullwidth">
          <select v-model="game.platformId">
            <option v-for="platform in platforms" :key="platform.id" :value="platform.id">
              {{ platform.name }}
            </option>
          </select>
        </div>
      </div>
    </form>
  </Modal>
</template>
