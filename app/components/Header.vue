<template>
  <div class="flex items-center justify-between px-4 py-2 border-b-indigo-500">
    <div class="flex-shrink-0">
      <ColorModeButton />
    </div>
    <nav class="flex-grow text-center">
      <UNavigationMenu :items="items" class="inline-flex" />
    </nav>
    <div class="flex-shrink-0">
        <p class="text-slate-600">Selina Fehn @2025</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const items = ref([
  {
    label: 'Home',
    description: 'Die Homepage Seite',
    to: '/',
    icon: 'i-lucide-house'
  },
  {
    label: 'Projekte',
    description: 'Hier ist der Blog',
    to: '/projects',
    icon: 'i-carbon:align-box-top-center'
  },
  {
    label: 'Charts.js',
    description: 'Hier sind die Statistiken',
    to: '/charts',
    icon: 'i-carbon:chart-average'
  },
  {
    label: 'Vue-Chrts',
    description: 'Hier sind die Statistiken',
    to: '/vue-chrts',
    icon: 'i-carbon:chart-average'
  },
  {
    label: 'Mermaid Charts',
    description: 'Hier sind ein Paar Charts',
    to: '/mermaid',
    icon: 'i-carbon:chart-average'
  },
  {
    label: 'GitHub',
    icon: 'i-simple-icons-github',
    to: 'https://github.com/selinafehn',
    target: '_blank'
  }
])
</script>

<style scoped>
</style>
