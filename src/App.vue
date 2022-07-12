<script setup lang="ts">
import { RouterView } from 'vue-router'
import Navigation from './components/Navigation.vue'
</script>

<template>
  <div>
    <Navigation />
    <RouterView />
  </div>
</template>

<style lang="sass">
@import 'bulma/bulma.sass'
</style>
