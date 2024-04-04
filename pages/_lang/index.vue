<template>
  <main>
    <HomeHero :images="images" />
    <section id="about" class="section">
      <div class="box about-inner">
        <div class="about-content">
          <div class="about-content-top">
            <h3 class="section-title">
              {{ $store.state.translations['main.about-app'] }}
            </h3>
            <div>
              <p>
                {{ $store.state.translations['main.about-txt-1'] }}
              </p>
              <p>
                {{ $store.state.translations['main.about-txt-2'] }}
              </p>
            </div>
          </div>
          <a href="/file.pdf" download class="c-btn" id="chances">
            <img src="@/assets/media/download.svg" alt="" />
            {{ $store.state.translations['main.download-book'] }}</a>
        </div>
        <div class="about-video">
          <img src="@/assets/media/logo.svg" class="logo" alt="logo" />
          <img :src="images[4].image" alt="" class="image" />
        </div>
      </div>
    </section>

    <section class="section">
      <div class="box section-inner">
        <h3 class="section-title center">
          {{ $store.state.translations['main.have-chances'] }}
        </h3>
        <HomeChances :images="images" />
      </div>
    </section>

    <section class="section">
      <div class="box section-inner">
        <h3 class="section-title center">
          {{ $store.state.translations['main.how'] }}
        </h3>
        <HomeHow :images="images" />
      </div>
    </section>

    <HomeRegistration :images="images" />
    <!-- <HomeVideos /> -->
    <section class="section" id="advantages">
      <div class="box section-inner">
        <h3 class="section-title center">
          {{ $store.state.translations['main.chances-title-1'] }}
        </h3>
        <div class="advantages-container">
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-1'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-1'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-2'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-2'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-3'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-3'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-4'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-4'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-5'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-5'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-6'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-6'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-7'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-7'] }}
              </p>
            </div>
          </div>
          <div class="advantage-card">
            <div class="advantage-card-icon">
              <img src="@/assets/media/assignment.svg" alt="logo" />
            </div>
            <div class="advantage-card-content">
              <h5 class="advantage-card-title">
                {{ $store.state.translations['main.adv-title-8'] }}
              </h5>
              <p class="advantage-card-desc">
                {{ $store.state.translations['main.adv-txt-8'] }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <section id="blog" class="section">
      <div class="box section-inner">
        <h3 class="section-title center">
          {{ $store.state.translations['main.news'] }}
        </h3>
        <div class="news-container">
          <div v-for="item in news" :key="item.id" class="item">
            <NuxtLink :to="`/${$route.params.lang}/blog/${item.slug}`" class="news-card">
              <div class="news-image">
                <img :src="item.image" alt="Uydan ishlash uchun yakuniy qo'llanma" class="image" />
              </div>
              <div class="news-card-content">
                <div class="news-card-category">
                  <p>Hesap news</p>
                  <span></span>
                  <p>{{ item.date }}</p>
                </div>
                <p class="news-card-title">
                  {{ item.title }}
                </p>
              </div>
            </NuxtLink>
          </div>
        </div>
        <!-- <div class="centered-btn">
          <NuxtLink to="/blog" class="c-btn-third">Ko’proq ko’rish</NuxtLink>
        </div> -->
      </div>
    </section>

    <section class="section" id="faq">
      <div class="box section-inner">
        <h3 class="section-title center">
          {{ $store.state.translations['main.all-faq'] }}
        </h3>
        <HomeFAQ :faq="faq" />
      </div>
    </section>

    <TheBanner :images="images" />
  </main>
</template>

<script>
import TheBanner from '~/components/TheBanner.vue'
import HomeHero from '@/components/HomePage/HomeHero.vue'
import HomeChances from '@/components/HomePage/HomeChances.vue'
import HomeHow from '@/components/HomePage/HomeHow.vue'
import HomeRegistration from '@/components/HomePage/HomeRegistration.vue'
import HomeFAQ from '@/components/HomePage/HomeFAQ.vue'
import HomeVideos from '@/components/HomePage/HomeVideos.vue'

import newsApi from '@/api/news'
import faqApi from '~/api/faq'
import imagesApi from '@/api/images'

export default {
  name: 'IndexPage',
  data: () => ({
    news: [
      {
        id: 1,
        title: 'Best ideas for photography',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'http://localhost:3000/_nuxt/assets/media/news.jpg',
        date: '10.02.2000',
      },
      {
        id: 2,
        title: 'Ios 17 new tricks',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'http://localhost:3000/_nuxt/assets/media/how.svg',
        date: '10.02.2000',
      },
      {
        id: 3,
        title: 'New messenger',
        subtitle:
          'Lorem Ipsum is simply dummy text of the printing and typesetting industry',
        img: 'http://localhost:3000/_nuxt/assets/media/chances.svg',
        date: '10.02.2000',
      },
    ],
  }),
  components: {
    TheBanner,
    HomeHero,
    HomeChances,
    HomeHow,
    HomeRegistration,
    HomeFAQ,
    HomeVideos,
  },
  async asyncData({ $axios, params, redirect }) {
    if (params.lang === 'offerta') {
      redirect('/uz/offerta')
    }

    const news = await newsApi.getNews($axios, params.lang)
    const faq = await faqApi.getFaq($axios, params.lang)
    const images = await imagesApi.getImages($axios, params.lang)

    return {
      news,
      faq,
      images,
    }
  },

  mounted() {
    if (this.$route.params.lang === 'offerta') {
      this.$router.push('/ru/offerta')
    }
  },
}
</script>

<style scoped>
/* === About === */
.about-inner {
  display: grid;
  grid-template-columns: 0.4fr 0.6fr;
  align-items: center;
  gap: 40px;
}

.about-content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 77px;
}

.about-content-top {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.about-content-top div {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.about-content-top div p {
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
}

.about-content-top div p span {
  color: var(--blue);
}

.about-video {
  position: relative;
  width: 100%;
  height: 530px;
  border-radius: 40px;
  border: 1px solid #dbdee8;
}

.about-video .logo {
  position: absolute;
  top: 32px;
  left: 32px;
  display: block;
  width: 139px;
  height: 40px;
  z-index: 9;
}

/* === Advantages === */
.advantages-container {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}

.advantage-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 24px;
  border-radius: 40px;
  min-height: 330px;
  border: 1.5px solid #ebf5ff;
  background-color: #ebf5ff;
}

.advantage-card:nth-child(2),
.advantage-card:nth-child(4),
.advantage-card:nth-child(5),
.advantage-card:nth-child(7) {
  background-color: var(--white);
  border: 1.5px solid #dbdee8;
}

.advantage-card-icon {
  width: 72px;
  height: 72px;
  display: grid;
  place-items: center;
  border: 1px solid #cef3fc;
  background-color: var(--white);
  border-radius: 50%;
}

.advantage-card-icon img {
  width: 40px;
  height: 40px;
}

.advantage-card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.advantage-card-title {
  font-family: var(--font-bold), sans-serif;
  font-weight: 700;
  font-size: 20px;
  line-height: 26px;
  color: var(--black);
}

.advantage-card-desc {
  font-family: var(--font-regular), sans-serif;
  font-size: 18px;
  line-height: 27px;
  color: #7f869b;
}

.news-image img {
  transition: 0.3s;
}

.news-card:hover .news-image img {
  transform: scale(1.1);
}

.news-card:hover .news-card-title {
  color: var(--blue);
}

.news-card-title {
  transition: 0.3s;
}

/* === RESPONSIVE === */
@media (max-width: 1800px) {
  .advantages-container {
    gap: 20px;
  }

  .advantage-card {
    padding: 20px;
    border-radius: 24px;
    gap: 16px;
  }

  .advantage-card-desc {
    font-size: 16px;
    line-height: 24px;
  }
}

@media (max-width: 1200px) {
  .advantages-container {
    grid-template-columns: 1fr 1fr;
    gap: 16px;
  }

  .advantage-card {
    padding: 16px;
    border-radius: 20px;
  }

  .advantage-card:nth-child(2),
  .advantage-card:nth-child(4),
  .advantage-card:nth-child(5),
  .advantage-card:nth-child(7) {
    background-color: #ebf5ff;
    border: 1px solid #ebf5ff;
  }

  .advantage-card:nth-child(2),
  .advantage-card:nth-child(3),
  .advantage-card:nth-child(6),
  .advantage-card:nth-child(7) {
    background-color: var(--white);
    border: 1px solid #dbdee8;
  }

  .about-inner {
    grid-template-columns: repeat(1, 1fr);
    padding: 40px 16px;
  }
}

@media (max-width: 580px) {
  .advantage-card {
    min-height: 260px;
    border-radius: 23px;
  }

  .advantage-card-icon {
    width: 41px;
    height: 41px;
  }

  .advantage-card-icon img {
    width: 24px;
    height: 24px;
  }

  .advantage-card-title {
    font-size: 16px;
    line-height: 20px;
  }

  .advantage-card-desc {
    font-size: 12px;
    line-height: 18px;
  }

  .advantage-card-content {
    gap: 8px;
  }
}

.news-card {
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-image {
  position: relative;
  width: 100%;
  height: 320px;
  border-radius: 40px;
  overflow: hidden;
}

.news-card-category {
  display: flex;
  align-items: center;
  gap: 8px;
}

.news-card-category p {
  font-family: var(--font-medium), sans-serif;
  font-weight: 500;
  font-size: 14px;
  line-height: 21px;
  color: #7f869b;
}

.news-card-category span {
  display: block;
  width: 4px;
  height: 4px;
  background-color: #7f869b;
  border-radius: 50%;
}

.news-card-content {
  display: flex;
  flex-direction: column;
  gap: 16px;
}

.news-card-title {
  font-family: var(--font-halvar-bold), sans-serif;
  font-weight: 700;
  font-size: 24px;
  line-height: 28.8px;
  color: var(--black);
  text-transform: uppercase;
}

@media (max-width: 1800px) {
  .news-image {
    height: 280px;
    border-radius: 24px;
  }

  .news-card-content {
    gap: 8px;
  }

  .news-card-title {
    font-size: 18px;
    line-height: 27px;
  }
}

@media screen and (max-width: 1024px) {
  .advantages-container {
    grid-template-columns: repeat(1, 1fr) !important;
    gap: 8px;
  }
}

@media (max-width: 880px) {
  .news-image {
    height: 225px;
  }

  .news-card-title {
    font-size: 16px;
    line-height: 20px;
  }

  .news-card-category p {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
