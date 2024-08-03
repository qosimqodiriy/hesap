export default {
  // Global page headers: https://go.nuxtjs.dev/config-head
  head: {
    title: 'Hesap',
    htmlAttrs: {
      lang: 'en',
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' },
    ],
    link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  vue: {
    defineModel: true
  },

  css: ['@/assets/css/main.css'],

  plugins: ['@/plugins/yandex.js'],

  components: true,

  modules: ['bootstrap-vue/nuxt', '@nuxtjs/axios'],

  axios: {
    baseURL: 'https://apihesap.pythonanywhere.com/api',
  },
  ssr: false,
  build: {},
   target: 'server',
   server: {
     port: 4450,
     host: '0.0.0.0',
   },
}
