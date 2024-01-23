<template>
  <footer>
    <div id="footer" class="box footer-inner">
      <div class="inner-top">
        <div class="inner-top-left">
          <NuxtLink to="/" class="logo" aria-label="home"></NuxtLink>
        </div>
        <div class="inner-top-right">
          <div class="socialmedia">
            <a
              href="https://t.me//twoclicks_admin"
              target="_blank"
              rel="noreferrer"
              class="sm-link"
            >
              <img src="@/assets/media/telegram.svg" alt="telegram" />
            </a>
            <a
              href="https://www.youtube.com/@2clicksgroup"
              target="_blank"
              rel="noreferrer"
              class="sm-link"
            >
              <img src="@/assets/media/youtube.svg" alt="telegram" />
            </a>
            <a
              href="https://instagram.com/twoclicksuz?igshid=MzRlODBiNWFlZA=="
              target="_blank"
              rel="noreferrer"
              class="sm-link"
            >
              <img src="@/assets/media/instagram.svg" alt="telegram" />
            </a>
          </div>
        </div>
      </div>
      <div class="inner-bottom">
        <div class="inner-bottom-top">
          <nav class="navigation">
            <NuxtLink @click="menuHandle = false" to="/" class="nav-link">{{
              $store.state.translations['main.main']
            }}</NuxtLink>
            <NuxtLink
              @click="menuHandle = false"
              to="/#about"
              class="nav-link"
              >{{ $store.state.translations['main.about'] }}</NuxtLink
            >
            <NuxtLink
              @click="menuHandle = false"
              to="/#chances"
              class="nav-link"
              >{{ $store.state.translations['main.chances'] }}</NuxtLink
            >
            <NuxtLink
              @click="menuHandle = false"
              to="/#advantages"
              class="nav-link"
              >{{ $store.state.translations['main.advantages'] }}</NuxtLink
            >
            <NuxtLink
              @click="menuHandle = false"
              to="/#blog"
              class="nav-link"
              >{{ $store.state.translations['main.blog'] }}</NuxtLink
            >
            <NuxtLink @click="menuHandle = false" to="/#faq" class="nav-link">{{
              $store.state.translations['main.faq']
            }}</NuxtLink>
          </nav>
          <nav class="platforms">
            <a
              href="https://play.google.com/store/apps/details?id=app.twoclicks"
              target="_blank"
              rel="noreferrer"
              class="platform-link"
            >
              <img
                src="@/assets/media/footer-googleplay.jpg"
                alt="googleplay"
              />
            </a>
            <a
              href="https://apps.apple.com/uz/app/2clicks/id6444673015"
              target="_blank"
              rel="noreferrer"
              class="platform-link"
            >
              <img src="@/assets/media/footer-appstore.jpg" alt="appstore" />
            </a>
          </nav>
        </div>
        <div class="inner-bottom-bottom">
          <div class="by">
            <p class="footer-text">
              {{ $store.state.translations['main.powered'] }}
              <a href="https://ndc.uz" target="_blank" rel="noreferrer">NDC</a>
            </p>
          </div>
          <div class="infos">
            <a href="https://2clicks.uz/offerta/" target="_blank">{{
              $store.state.translations['main.policy']
            }}</a>
            <a href="https://2clicks.uz/offerta/" target="_blank">{{
              $store.state.translations['main.terms']
            }}</a>
          </div>
          <div class="by">
            <p class="footer-text">
              {{ $store.state.translations['main.designed'] }}
              <a href="https://mazmoon.uz" target="_blank" rel="noreferrer"
                >Mazmoon</a
              >
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
export default {
  name: 'TheFooter',
}
</script>

<style scoped>
footer {
  margin-top: 120px;
  background-color: #ebf5ff;
}
.inner-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding-block: 24px;
  border-bottom: 1px solid #bad1e8;
}
.inner-top-left {
  display: flex;
  align-items: center;
  gap: 64px;
}
.inner-bottom {
  padding-top: 40px;
  padding-bottom: 24px;
  display: flex;
  flex-direction: column;
  gap: 40px;
}
.inner-bottom-top,
.inner-bottom-bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
}
.navigation {
  display: flex;
  align-items: center;
  gap: 80px;
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
.nav-link:hover,
.inner-top-right a:hover {
  color: var(--blue);
  transition: 0.3s;
}
.platforms {
  display: flex;
  align-items: center;
  gap: 24px;
}
.platform-link {
  display: block;
  max-width: 135px;
  width: 100%;
  height: 40px;
  object-fit: cover;
}
.footer-text {
  font-family: var(--font-medium), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
}
.footer-text a {
  color: var(--blue);
}
.inner-top-right {
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.inner-top-right p {
  font-family: var(--font-bold), sans-serif;
  font-weight: 600;
  font-size: 14px;
  line-height: 21px;
  color: #879db4;
}
.inner-top-right a {
  font-family: var(--font-halvar-bold), sans-serif;
  font-weight: 700;
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
  transition: 0.3s;
}
.infos a {
  font-size: 14px;
  line-height: 100%;
  text-decoration: none;
  color: #879db4;
  margin-right: 24px;
}
.by {
  display: flex;
  align-items: center;
  gap: 24px;
}
/* === RESPONSIVE === */
@media (max-width: 1800px) {
  .nav-link,
  .footer-text {
    font-size: 16px;
    line-height: 24px;
  }
  .nav-link {
    font-family: var(--font-bold), sans-serif;
  }
  .navigation {
    column-gap: 40px;
    row-gap: 12px;
    flex-wrap: wrap;
  }
}
@media (max-width: 880px) {
  footer {
    margin-top: 40px;
  }
  .inner-top {
    flex-direction: column;
    align-items: flex-start;
    padding-block: 0px;
    border-bottom: none;
    gap: 0px;
  }
  .inner-bottom {
    gap: 24px;
  }
  .inner-top-left {
    padding-block: 24px;
    border-bottom: 1px solid #bad1e8;
    width: 100%;
  }
  .inner-top-right {
    padding-top: 20px;
    width: 100%;
  }
  .inner-bottom-top {
    flex-direction: column;
    align-items: flex-start;
    gap: 24px;
  }
}
@media (max-width: 380px) {
  .inner-top-left,
  .inner-bottom-bottom {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .platforms {
    gap: 16px;
  }
}
</style>
