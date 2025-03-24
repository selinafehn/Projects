<script setup lang="ts">
import { ref, onMounted } from 'vue'

const projects = ref([])

async function getProjectsFromGithub() {
  try {
    const response = await fetch("https://api.github.com/users/selinafehn/repos")
    if (!response.ok) throw new Error("Fetchen der Daten fehlgeschlagen");
    const data = await response.json();
    projects.value = data;
  } catch (e) {
    console.error("Error:", e)
  }
}

onMounted(() => {
  getProjectsFromGithub()
})
</script>

<template>
  <pre>{{ projects }}</pre>
</template>

<style scoped>
/* dein Style hier */
</style>
