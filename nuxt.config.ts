// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',
  devtools: { enabled: true },
  ssr: false,

  modules: ['@nuxt/eslint', '@nuxt/icon', '@nuxt/image', '@nuxt/ui'],
  css: ['assets/scss/main.scss'],
  postcss: {
    plugins: {
      autoprefixer: {}
    }
  }
})
