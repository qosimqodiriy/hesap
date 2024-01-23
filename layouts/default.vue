<template>
  <div class="wrapper">
    <TheHeader />
    <nuxt />
    <TheFooter />
  </div>
</template>

<script>
import translationsApi from '@/api/lang'

// import TheFooter from '~/components/TheFooter.vue'
import TheHeader from '~/components/TheHeader.vue'
import TheFooter from '~/components/TheFooter.vue'

export default {
  name: 'Layout',
  components: { TheHeader, TheFooter },

  data() {
    return {
      translations: [],
    }
  },

  async fetch() {
    const translations = await translationsApi.getTranslations(
      this.$axios,
      this.$route.params.lang
    )

    console.log(translations.data)

    await this.$store.commit('getTranslations', translations)
  },

  computed: {
    currentLang() {
      return this.$route.params.lang
    },
  },

  watch: {
    async currentLang(val) {
      const translations = await translationsApi.getTranslations(
        this.$axios,
        this.$route.params.lang
      )

      await this.$store.commit('getTranslations', translations)
    },
  },

  mounted() {
    window.replainSettings = { id: '5403c8e1-eb04-43c8-9e8d-f70b6b38d111' }
    ;(function (u) {
      const s = document.createElement('script')
      s.async = true
      s.src = u
      const x = document.getElementsByTagName('script')[0]
      x.parentNode.insertBefore(s, x)
    })('https://widget.replain.cc/dist/client.js')
  },
}
</script>

<style scoped>
.wrapper {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1 1 auto;
  margin-top: 110px;
}

@media (max-width: 880px) {
  main {
    margin-top: 85px;
  }
}
</style>
