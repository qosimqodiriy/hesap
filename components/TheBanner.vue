<template>
  <section class="section p-0">
    <div class="box">
      <div class="banner">
        <div class="row">
          <div class="col-lg-6 col-xs-12">
            <h4 class="title">{{ $store.state.translations['main.ios'] }}</h4>
            <p class="sub">
              {{ $store.state.translations['main.hero-scan'] }}
            </p>
            <div class="flexer">
              <a
                class="link"
                href="https://apps.apple.com/uz/app/2clicks/id6444673015"
                target="_blank"
              >
                <img class="code" src="@/assets/media/ios.png" alt="" />
                <img
                  class="platform"
                  src="@/assets/media/appstore.svg"
                  alt=""
                />
              </a>
              <a
                class="link"
                href="https://play.google.com/store/apps/details?id=app.twoclicks"
                target="_blank"
              >
                <img class="code" src="@/assets/media/android.png" alt="" />
                <img
                  class="platform"
                  src="@/assets/media/playmarket.svg"
                  alt=""
                />
              </a>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 right">
            <img :src="images[2].image" alt="" class="pic" />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheBanner',

  props: ['images'],
}
</script>

<style scoped>
.banner {
  background: radial-gradient(
    225.42% 620.37% at 0% -22.05%,
    #cef3fc 0%,
    #00a5ff 28.12%,
    #0053dc 64.06%,
    #0027dc 100%
  );
  border-radius: 56px;
  height: 400px;
  padding: 44px 56px;
  overflow: hidden;
  display: flex;
  align-items: center;
}

.title {
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 8px;
  font-family: var(--font-halvar-black);
  max-width: 489px;
  white-space: nowrap;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  margin-bottom: 40px;
}
.right {
  position: relative;
}
.pic {
  position: absolute;
  right: 0;
  top: 60%;
  transform: translateY(-50%);
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
.row {
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .pic {
    display: none;
  }
  .banner {
    height: auto;
    padding: 24px;
    justify-content: center;
    border-radius: 16px;
  }
  .title {
    font-weight: 800;
    font-size: 24px;
    line-height: 120%;
    margin-bottom: 8px;
    white-space: initial;
  }
  .flexer {
    flex-direction: column;
  }
}
</style>
