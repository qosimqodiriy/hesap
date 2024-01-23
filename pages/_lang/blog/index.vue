<template>
  <main>
    <section class="mini-section">
      <div class="box blog-inner">
        <div class="inner-info-side">
          <h1 class="title">Barcha yangiliklar 🗞️</h1>
          <div class="info-side-grid">
            <div class="grid-item"></div>
            <div class="grid-item"></div>
            <div class="grid-item"></div>
          </div>
        </div>
        <div class="inner-news-side">
          <div class="news-container">
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
            <NewsCard />
          </div>
          <div class="centered-btn">
            <button class="c-btn-third">Ko’proq ko’rish</button>
          </div>
        </div>
      </div>
    </section>
    <TheBanner />
  </main>
</template>

<script>
import NewsCard from '~/components/NewsCard.vue'
import TheBanner from '~/components/TheBanner.vue'

export default {
  name: 'BlogPage',
  components: { TheBanner, NewsCard },

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
}
</script>
<style scoped>
.mini-section {
  padding-top: 80px;
}
.inner-info-side {
  display: flex;
  flex-direction: column;
  gap: 45px;
  padding-bottom: 80px;
  border-bottom: 1px solid #dbdee8;
}
.info-side-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: 2fr 1fr;
  gap: 24px;
}
.grid-item:nth-child(1) {
  min-height: 515px;
  background-color: black;
}
.grid-item:nth-child(2) {
  grid-row: span 2;
  height: 100%;
  background-color: red;
}
.grid-item:nth-child(3) {
  background: radial-gradient(
    225.42% 620.37% at 0% -22.05%,
    #cef3fc 0%,
    #00a5ff 28.12%,
    #0053dc 64.06%,
    #0027dc 100%
  );
  border-radius: 40px;
}
.inner-news-side {
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 40px;
}
.title {
  text-transform: uppercase;
  font-family: var(--font-halvar-black);
  font-weight: 800;
  font-size: 56px;
  line-height: 67.2px;
  color: var(--black);
}
</style>
