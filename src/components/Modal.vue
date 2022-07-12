<script setup lang="ts">
import { defineProps } from 'vue'

defineProps<{
  title: string
  showButtons?: boolean
}>()
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="$emit('closeModal')"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot" v-if="showButtons">
        <button class="button is-success" @click="$emit('saveModal')">Save</button>
        <button class="button" @click="$emit('closeModal')">Cancel</button>
      </footer>
    </div>
  </div>
</template>
