<template>
  <div class="wrap" id="home">
    <div class="box">
      <div class="top">
        <h4 class="title">{{ $store.state.translations['main.title'] }}</h4>
        <p class="sub">
          {{ $store.state.translations['main.sub'] }}
        </p>
        <div class="buttons">
          <a href="https://play.google.com/store/apps/details?id=app.twoclicks" class="blue" target="_blank">
            <img src="@/assets/media/download.svg" alt="" />
            {{ $store.state.translations['main.download'] }}</a>
          <NuxtLink :to="`/${$route.params.lang}/#chances`" class="white">{{
          $store.state.translations['main.chances']
        }}</NuxtLink>
        </div>
      </div>
      <div class="bottom">
        <div class="left">
          <p class="paragraph">
            {{ $store.state.translations['main.ios'] }}
            <!-- <span class="sky">iOS</span> hamda
            <span class="sky">Android</span> uchun! -->
          </p>
          <div class="flexer">
            <a class="link" href="https://apps.apple.com/uz/app/2clicks/id6444673015" target="_blank">
              <img class="code" src="@/assets/media/ios.png" alt="" />
              <img class="platform" src="@/assets/media/appstore.svg" alt="" />
            </a>
            <a class="link" href="https://play.google.com/store/apps/details?id=app.twoclicks" target="_blank">
              <img class="code" src="@/assets/media/android.png" alt="" />
              <img class="platform" src="@/assets/media/playmarket.svg" alt="" />
            </a>
          </div>
          <p class="txt">
            {{ $store.state.translations['main.hero-scan'] }}
          </p>
        </div>
        <div class="right"></div>
      </div>
      <div class="img">
        <img :src="images[0].image" alt="" class="pic" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['images'],
}
</script>

<style scoped>
.wrap {
  padding: 40px 0 0px 0;
}

.box {
  position: relative;
}

.img img {
  position: absolute;
  left: auto;
  right: 100px;
  top: 50%;
  transform: translateY(-50%);
  pointer-events: none;
}

.top {
  background: #ebf5ff;
  border-radius: 40px;
  padding: 64px 88px;
  margin-bottom: 16px;
}

.title {
  font-family: var(--font-halvar-black);
  font-style: normal;
  font-weight: 800;
  font-size: 56px;
  line-height: 120%;
  text-transform: uppercase;
  color: #010e38;
  max-width: 755px;
  margin-bottom: 16px;
}

.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #010e38;
  margin-bottom: 56px;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 14px;
}

.blue {
  background: #0053dc;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  border: 2px solid transparent;
  transition: 0.4s;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 16px;
}

.blue:hover {
  background: #00a5ff;
  color: white;
  border-color: transparent;
}

.white {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #0053dc;
  border: 2px solid #0053dc;
  border-radius: 16px;
  padding: 16px 32px;
  transition: 0.4s;
}

.white:hover {
  background: #00a5ff;
  color: white;
  border-color: transparent;
}

.left {
  background: #ebf5ff;
  border-radius: 40px;
  padding: 40px;
}

.paragraph {
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: var(--font-halvar-bold);
}

.sky {
  color: #00a5ff;
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-transform: uppercase;
  margin-bottom: 16px;
  font-family: var(--font-halvar-bold);
}

.flexer {
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 14px;
}

.link {
  display: flex;
  width: 272px;
  height: 100px;
  border-radius: 10px;
  padding: 10px;
  gap: 16px;
  background: white;
}

.platform {
  width: 130px;
  height: auto;
  object-fit: contain;
}

.code {
  width: 80px;
  height: 80px;
  object-fit: cover;
}

.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #010e38;
}

.right {
  background: radial-gradient(225.42% 620.37% at 0% -22.05%,
      #cef3fc 0%,
      #00a5ff 28.12%,
      #0053dc 64.06%,
      #0027dc 100%);
  border-radius: 40px;
  width: 100%;
  height: 100%;
}

.bottom {
  display: grid;
  grid-template-columns: 4fr 6fr;
  align-items: center;
  gap: 16px;
}

@media screen and (max-width: 1024px) {
  .title {
    font-weight: 800;
    font-size: 36px;
    line-height: 120%;
  }

  .top,
  .left {
    padding: 24px;
  }

  .img img {
    position: static;
    transform: none;
    width: 100%;
  }

  .sub {
    font-weight: 400;
    font-size: 14px;
    line-height: 150%;
    margin-bottom: 24px;
  }

  .buttons {
    flex-direction: column;
  }

  .buttons a {
    text-align: center;
    width: 100%;
    font-weight: 700;
    font-size: 14px;
    line-height: 150%;
  }

  .flexer {
    flex-direction: column;
  }

  .bottom {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
