import mermaid from 'mermaid'
import { defineNuxtPlugin } from '#app'

export default defineNuxtPlugin((nuxtApp) => {
    mermaid.initialize({
        startOnLoad: false,
        theme: 'dark',
    })

    nuxtApp.provide('mermaid', mermaid)
})
