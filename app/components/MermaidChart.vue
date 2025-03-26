<template>
  <div class="mermaid-wrapper">
    <div ref="chartRef" class="mermaid" />
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
const chartRef = ref(null)
const { $mermaid } = useNuxtApp()

// const graphDefinition = `
// graph TD
// A[🧑‍💻 Entwickler] -->|push| B((GitHub))
// B --> C{CI/CD}
// C -->|Tests OK| D[📦 Build]
// D --> E{Deployment?}
// E -->|Production| F[🚀 Live Server]
// E -->|Staging| G[🧪 Test Server]
// C -->|Tests fail| H[❌ Build Fail]
// H --> A
// F --> Z[🎉 Users]
// G --> Z
// `

const graphDefinition = `
  gantt
    title 🧠 Bachelorarbeit – Zeitplan (Start: 07.07. / Abgabe: 30.09.)
    dateFormat  YYYY-MM-DD
    axisFormat  %d.%m.

    section Vorbereitung
    Experteninterview & KPI-Definition     :done,    interview, 2025-07-07, 1w
    Use-Case Erstellung & Dokumentation    :done,    usecase,   2025-07-14, 1w

    section Entwicklung – Backend
    Backend Setup & API Design             :active,  backend1,  2025-07-21, 1w
    Datenlogik & Schnittstellen            :         backend2,  2025-07-28, 2w

    section Entwicklung – Frontend
    UI-Design & Komponentenstruktur        :         frontend1, 2025-08-11, 1w
    Integration mit Backend                :         frontend2, 2025-08-18, 2w

    section Testing & Evaluation
    Prototyp testen & evaluieren           :         testing,   2025-09-01, 1w
    Verbesserungen & Anpassungen           :         improve,   2025-09-08, 1w

    section Abschluss
    Dokumentation schreiben                :         docu,      2025-09-15, 2w
`



onMounted(() => {
  if (!chartRef.value) return
  chartRef.value.textContent = graphDefinition
  $mermaid.init(undefined, [chartRef.value])
})
</script>

<style scoped>
.mermaid-wrapper {
  padding: 1rem;
  border: 1px #666;
}
</style>
