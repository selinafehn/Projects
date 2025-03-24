export default defineNuxtConfig({
  modules: [
    '@nuxt/ui',
    '@nuxtjs/i18n'
  ],
  ui: {
    colors:{
      primary: 'orange',
      neutral: 'zinc',
    }
  },
  future: {
    compatibilityVersion: 4,
  },
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  css: ['~/assets/css/main.css'],
  i18n: {
    locales: [
      { code: 'de', iso: 'de-DE', file: 'de.json' },
      { code: 'en', iso: 'en-US', file: 'en.json' }
    ],
    defaultLocale: 'de',
    strategy: 'prefix_except_default', // Standard-Sprache bekommt keinen Prefix
    lazy: true,
    langDir: 'locales/'
  },
})