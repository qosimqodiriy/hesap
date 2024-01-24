<template>
  <header>
    <div class="box header-inner">
      <NuxtLink :to="`/${$route.params.lang}/#`" aria-label="home">
        <img src="@/assets/media/h.png" style="width: 160px" alt="" />
      </NuxtLink>
      <nav class="navigation">
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#`"
          class="nav-link"
          >{{ $store.state.translations['main.main'] }}</NuxtLink
        >
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#about`"
          class="nav-link"
          >{{ $store.state.translations['main.about'] }}</NuxtLink
        >
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#chances`"
          class="nav-link"
          >{{ $store.state.translations['main.chances'] }}</NuxtLink
        >
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#advantages`"
          class="nav-link"
          >{{ $store.state.translations['main.advantages'] }}</NuxtLink
        >
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#blog`"
          class="nav-link"
          >{{ $store.state.translations['main.blog'] }}</NuxtLink
        >
        <NuxtLink
          @click="menuHandle = false"
          :to="`/${$route.params.lang}/#faq`"
          class="nav-link"
          >{{ $store.state.translations['main.faq'] }}</NuxtLink
        >
      </nav>
      <div class="lang">
        <li>
          <button
            :class="{ disable: $route.params.lang == 'uz' }"
            @click="changeLang('uz')"
          >
            Uzb
          </button>
        </li>
        |
        <li>
          <button
            :class="{ disable: $route.params.lang == 'ru' }"
            @click="changeLang('ru')"
          >
            Rus
          </button>
        </li>
        |
        <li>
          <button
            :class="{ disable: $route.params.lang == 'en' }"
            @click="changeLang('en')"
          >
            Eng
          </button>
        </li>
      </div>
      <a href="#footer" class="c-btn-third header-btn">{{
        $store.state.translations['main.download']
      }}</a>
      <button @click="menuHandle = !menuHandle" class="hamburger-wrapper">
        <div class="hamburger">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </button>
    </div>
    <div :class="{ show: menuHandle }" class="menu">
      <div class="box">
        <nav class="navi">
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#home`"
            class="nav-link"
            >{{ $store.state.translations['main.main'] }}</NuxtLink
          >
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#about`"
            class="nav-link"
            >{{ $store.state.translations['main.about'] }}</NuxtLink
          >
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#chances`"
            class="nav-link"
            >{{ $store.state.translations['main.chances'] }}</NuxtLink
          >
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#advantages`"
            class="nav-link"
            >{{ $store.state.translations['main.advantages'] }}</NuxtLink
          >
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#blog`"
            class="nav-link"
            >{{ $store.state.translations['main.blog'] }}</NuxtLink
          >
          <NuxtLink
            @click="menuHandle = false"
            :to="`/${$route.params.lang}/#faq`"
            class="nav-link"
            >{{ $store.state.translations['main.faq'] }}</NuxtLink
          >
        </nav>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  name: 'TheHeader',

  data() {
    return {
      menuHandle: false,
    }
  },

  computed: {
    getLang() {
      return this.$store.getters.language
    },
    currentLang() {
      return this.$route.params.lang
    },
  },

  methods: {
    changeLang(code) {
      this.$store.dispatch('actionLangRu', code)
      this.$router.replace({
        params: {
          lang: code,
        },
        query: this.$route.query,
      })
      localStorage.setItem('Lang', code)
    },
  },

  watch: {
    currentLang() {},
  },
}
</script>

<style scoped>
header a img {
  width: 100%;
  height: 100%;
}
header {
  position: fixed;
  top: 0;
  width: 100%;
  background-color: var(--white);
  z-index: 99;
  border-bottom: 2px solid #ebebeb;
}
.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  padding-block: 16px;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 40px;
}
.nav-link {
  font-family: var(--font-bold), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  transition: 0.3s;
  padding: 0px;
}
.nav-link.active,
.nav-link:hover {
  color: var(--blue);
  transition: 0.3s;
}
.hamburger-wrapper {
  display: none;
  background-color: unset;
  border: none;
  width: 100%;
  max-width: 56px;
  height: 56px;
  border: 1px solid #ebebeb;
  border-radius: 50%;
}
.hamburger {
  display: flex;
  flex-direction: column;
  gap: 5px;
}
.hamburger span {
  width: 18px;
  height: 1.5px;
  background-color: #020105;
}
.navi .nav-link {
  font-size: 32px;
  line-height: 100%;
}
.navi {
  padding-top: 24px;
  display: flex;
  flex-direction: column;
  gap: 48px;
}
.menu {
  background: white;
  height: 90vh;
  width: 100%;
  transition: 0.4s;
  transform: translateX(-100%);
  display: none;
}
.menu.show {
  transform: translateX(0);
}
.header-btn {
  border: 2px solid var(--blue);
  transition: 0.3s;
}
.header-btn:hover {
  background: #00a5ff;
  color: white;
  border-color: transparent;
}
.lang {
  display: flex;
  align-items: center;
  gap: 12px;
}
.lang li {
  list-style: none;
}
.lang button {
  font-size: 18px;
  background: transparent;
  border: none;
  font-weight: 600;
  color: var(--blue);
  position: relative;
}
.lang button::after {
  position: absolute;
  bottom: 1px;
  left: 0;
  width: 100%;
  height: 2px;
  background: var(--blue);
  content: '';
  display: none;
}
.lang .disable {
  pointer-events: none;
}
.lang .disable::after {
  display: block;
}
/* === RESPONSIVE === */
@media (max-width: 1800px) {
  .nav-link {
    font-size: 16px;
    line-height: 24px;
  }
}
@media (max-width: 1200px) {
  .navigation {
    gap: 40px;
  }
  .menu {
    height: 90vh;
    display: flex !important;
  }
}
@media (max-width: 880px) {
  .navigation,
  .header-btn {
    display: none;
  }
  header {
    height: 86px;
    border-bottom: 1px solid #ebebeb;
  }
  .header-inner {
    padding-block: 0px;
    height: 100%;
  }
  .hamburger-wrapper {
    display: grid;
    place-items: center;
  }
  .lang button {
    font-size: 14px;
  }
  .lang {
    gap: 8px;
  }
  .logo {
    width: 100%;
    max-width: 120px;
  }
}
</style>
