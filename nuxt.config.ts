// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  css: [
    '@/assets/css/tailwind.css',
    '@/assets/css/main.css'
  ],
  compatibilityDate: '2025-05-15',
  devtools: { enabled: true }
})
