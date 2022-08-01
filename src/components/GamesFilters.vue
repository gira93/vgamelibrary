<script setup lang="ts">
import type { Platform } from '@/db'
import { PlatformRepository } from '@/repositories/PlatformRepository'
import { type Ref, ref, onMounted } from 'vue'

const platformRepository = new PlatformRepository()

defineProps<{
  platformId: number | null
  gameName: string
}>()
const emit = defineEmits(['update:platformId', 'update:gameName', 'updateTrigger'])

const platforms: Ref<Platform[]> = ref([])

const getAllPlatforms = async () => {
  platforms.value = await platformRepository.index()
}

const clearFilters = () => {
  emit('update:gameName', '')
  emit('update:platformId', null)
  emit('updateTrigger')
}

onMounted(() => {
  getAllPlatforms()
})
</script>

<template>
  <div class="column is-12 columns">
    <div class="field column is-2">
      <label class="label">Platform</label>
      <div class="select is-fullwidth">
        <select
          :value="platformId"
          @change="$emit('updateTrigger')"
          @input="$emit('update:platformId', parseInt(($event.target as HTMLSelectElement)?.value))"
        >
          <option :value="null">None</option>
          <option v-for="platform in platforms" :key="platform.id" :value="platform.id">
            {{ platform.name }}
          </option>
        </select>
      </div>
    </div>
    <div class="field column is-4">
      <label class="label">Name</label>
      <div class="control">
        <input
          :value="gameName"
          @input="$emit('update:gameName', ($event.target as HTMLInputElement)?.value)"
          class="input"
          type="text"
          @keyup.enter="$emit('updateTrigger')"
        />
      </div>
    </div>
    <div class="field column is-2">
      <label class="label">Clear</label>
      <button class="button is-primary" @click="clearFilters">Clear</button>
    </div>
  </div>
</template>
