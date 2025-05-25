// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/ui', '@pinia/nuxt'],
  css: ['assets/scss/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  },
  runtimeConfig: {
    public: {
      API_URL: process.env.NUXT_API_URL || 'not url'
    }
  }
})
