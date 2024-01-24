<template>
  <main>
    <section>
      <div class="minibox">
        <div class="top-info">
          <div class="news-card-category">
            <p>Hesap news</p>
            <span></span>
            <p>{{ post.date }}</p>
          </div>
          <h1 class="news-title">
            {{ post.title }}
          </h1>
          <p class="text">
            {{ post.subtitle }}
          </p>
        </div>
      </div>
      <div class="mediumbox">
        <div class="news-image top">
          <img :src="post.image" :alt="post.title" class="image" />
        </div>
      </div>
      <div class="minibox second-body">
        <div class="text-div">
          <div class="text" v-html="post.text"></div>
        </div>
      </div>
      <div class="minibox share-div">
        <p>Source <span>Mazmoon</span></p>
        <div class="socialmedia">
          <a href="#" target="_blank" rel="noreferrer" class="sm-link">
            <img src="@/assets/media/telegram.svg" alt="telegram" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" class="sm-link">
            <img src="@/assets/media/youtube.svg" alt="telegram" />
          </a>
          <a href="#" target="_blank" rel="noreferrer" class="sm-link">
            <img src="@/assets/media/instagram.svg" alt="telegram" />
          </a>
        </div>
      </div>
    </section>
    <TheBanner :images="images" />
  </main>
</template>

<script scoped>
import TheBanner from '~/components/TheBanner.vue'

import newsApi from '@/api/news'
import imagesApi from '@/api/images'

export default {
  name: 'BlogDetailPage',
  components: { TheBanner },

  async asyncData({ $axios, params }) {
    const news = await newsApi.getNews($axios, params.lang)
    const post = await newsApi.getNew(params.slug, $axios, params.lang)
    const images = await imagesApi.getImages($axios, params.lang)

    return {
      news,
      post,
      images,
    }
  },
}
</script>

<style scoped>
.top-info {
  padding-top: 80px;
  display: flex;
  flex-direction: column;
  gap: 16px;
}
.news-title {
  font-family: var(--font-halvar-black), sans-serif;
  font-weight: 900;
  font-size: 48px;
  line-height: 52.8px;
  color: var(--black);
  text-transform: uppercase;
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
.text-div {
  display: flex;
  flex-direction: column;
  gap: 24px;
}
.text {
  font-size: 18px;
  line-height: 150%;
}
.news-image {
  position: relative;
  width: 100%;
  height: 635px;
  border-radius: 24px;
  overflow: hidden;
}
.news-image.top {
  margin-top: 40px;
}
.second-body {
  display: flex;
  flex-direction: column;
  gap: 40px;
  margin-top: 77px;
}
.share-div {
  border-top: 1px solid #dbdee8;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  margin-top: 76px;
  padding-top: 24px;
}
.share-div p {
  font-family: var(--font-medium), sans-serif;
  font-weight: 500;
  font-size: 18px;
  line-height: 27px;
  color: var(--black);
}
.share-div p span {
  color: var(--blue);
}

/* === RESPONSIVE === */
@media (max-width: 1800px) {
  .top-info {
    padding-top: 40px;
  }
  .text-div {
    gap: 16px;
  }
  .news-title {
    font-size: 32px;
    line-height: 36px;
  }
  .text {
    font-size: 18px;
    line-height: 27px;
  }
  .news-image {
    height: 480px;
  }
  .share-div,
  .second-body {
    margin-top: 40px;
  }
}
@media (max-width: 880px) {
  .text {
    font-size: 16px;
    line-height: 24px;
  }
  .news-image {
    height: 320px;
  }
  .news-image.top {
    margin-top: 24px;
  }
  .second-body {
    gap: 24px;
    margin-top: 24px;
  }
  .share-div p {
    font-size: 16px;
    line-height: 24px;
  }
}
@media (max-width: 580px) {
  .news-title {
    font-size: 24px;
    line-height: 28.8px;
  }
  .news-image {
    height: 295px;
  }
}
</style>
