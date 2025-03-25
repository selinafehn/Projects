export default defineNuxtConfig({
  compatibilityDate: "2025-03-24",
  modules: ['@nuxt/ui', '@nuxtjs/i18n'],
  future: {
    compatibilityVersion: 4,
  },
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default',
    lazy: true,
    langDir: 'locales/'
  }
})