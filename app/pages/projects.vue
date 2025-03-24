<script setup lang="ts">
import { h, resolveComponent, ref, onMounted } from 'vue'
import type { TableColumn } from '@nuxt/ui'

const UTable = resolveComponent('UTable')


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

type Project = {
  id: number
  name: string
  description: string | null
  created_at: string
  updated_at: string
  html_url: string
}

const columns: TableColumn<Project>[] = [
  {
    accessorKey: 'name',
    header: 'Projektname',
    cell: ({ row }) =>
        h(
            'a',
            { href: row.getValue('html_url'), target: '_blank', class: 'text-blue-500 underline' },
            row.getValue('name')
        )
  },
  {
    accessorKey: 'description',
    header: 'Beschreibung',
    cell: ({ row }) => row.getValue('description') || '-'
  },
  {
    accessorKey: 'created_at',
    header: 'Erstellt am',
    cell: ({ row }) => {
      const date = new Date(row.getValue('created_at'))
      return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
    }
  },
  {
    accessorKey: 'updated_at',
    header: 'Aktualisiert am',
    cell: ({ row }) => {
      const date = new Date(row.getValue('updated_at'))
      return date.toLocaleDateString('de-DE', { day: 'numeric', month: 'short', year: 'numeric' })
    }
  }
]
</script>

<template>
  <UTable :data="projects" :columns="columns" class="flex-1" />
</template>

<style scoped>
/* dein Style hier */
</style>
