<script setup lang="ts">
import { RouterLink } from 'vue-router'

const navItems = [
  { name: 'dashboard', label: 'Dashboard' },
  { name: 'games', label: 'Games' },
  { name: 'platforms', label: 'Platforms' },
  { name: 'utils', label: 'Utils' }
]
</script>

<template>
  <div class="tabs">
    <ul>
      <li
        v-for="(item, index) in navItems"
        :key="index"
        :class="{ 'is-active': $route.name === item.name }"
      >
        <RouterLink class="navbar-item" :to="{ name: item.name }">
          {{ item.label }}
        </RouterLink>
      </li>
    </ul>
  </div>
</template>
