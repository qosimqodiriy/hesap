<template>
  <div class="wrap">
    <div class="box">
      <div class="header">
        <h4 class="title">{{ $store.state.translations['main.video'] }}</h4>
        <div class="link">
          <a href="https://www.youtube.com/@2clicksgroup" target="_blank">
            {{ $store.state.translations['main.all-videos'] }}
            <svg
              style="transform: rotate(315deg)"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M14 16L18 12M18 12L14 8M18 12L6 12"
                stroke="#0053dc"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </a>
        </div>
      </div>
      <div class="grid">
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/mCiq0LCBSjU"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/JHgpYixOp_g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/YFeqh6ir4Yo"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
        <div class="item">
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/u8LGUqwONtc"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style scoped>
.title {
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: black;
  font-family: var(--font-halvar-black);
}
.wrap {
  padding: 120px 0 0 0;
}
.grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 12px;
}
.item {
  aspect-ratio: 16 / 9;
  width: 98%;
}
.item iframe {
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 20px;
}

.header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 24px;
}
.link a {
  font-size: 18px;
  letter-spacing: 1px;
  font-weight: 600;
  color: var(--blue);
}
@media screen and (max-width: 1024px) {
  .header {
    flex-direction: column;
    align-items: flex-start;
    gap: 16px;
  }
  .grid {
    grid-template-columns: repeat(1, 1fr);
    gap: 8px;
  }
  .title {
    font-size: 24px;
  }
}
</style>
