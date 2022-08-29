<script setup lang="ts">
defineProps<{
  title: string
  cancelText?: string
  confirmText?: string
}>()

defineEmits(['cancelModal', 'confirmModal'])
</script>

<template>
  <div class="modal is-active">
    <div class="modal-background"></div>
    <div class="modal-card">
      <header class="modal-card-head">
        <p class="modal-card-title">{{ title }}</p>
        <button class="delete" aria-label="close" @click="$emit('cancelModal')"></button>
      </header>
      <section class="modal-card-body">
        <slot></slot>
      </section>
      <footer class="modal-card-foot" v-if="cancelText && confirmText">
        <button class="button is-success" @click="$emit('confirmModal')">{{ confirmText }}</button>
        <button class="button" @click="$emit('cancelModal')">{{ cancelText }}</button>
      </footer>
    </div>
  </div>
</template>
