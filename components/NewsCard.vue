<template>
  <NuxtLink to="/blog/uydan-ishlash-uchun-yakuniy-qollanma" class="news-card">
    <div class="news-image">
      <img
        src="@/assets/media/news.jpg"
        alt="Uydan ishlash uchun yakuniy qo'llanma"
        class="image"
      />
    </div>
    <div class="news-card-content">
      <div class="news-card-category">
        <p>Muhandislik</p>
        <span></span>
        <p>May 17, 2023</p>
      </div>
      <p class="news-card-title">Uydan ishlash uchun yakuniy qo'llanma</p>
    </div>
  </NuxtLink>
</template>

<script>
export default {
  name: 'NewsCard',
}
</script>

<style scoped>
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
