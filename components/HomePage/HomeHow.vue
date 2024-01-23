<template>
  <div class="wrap">
    <div class="left">
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-1'] }}</p>
      </div>
      <img class="line" src="@/assets/media/line-1.svg" alt="" />
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-2'] }}</p>
      </div>
      <img class="line" src="@/assets/media/line-1.svg" alt="" />
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-3'] }}</p>
      </div>
    </div>
    <div class="mid">
      <img :src="images[3].image" alt="" class="pic" />

      <a href="/file.pdf" download class="download">
        {{ $store.state.translations['main.download-pdf'] }}
      </a>
    </div>
    <div class="right">
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-4'] }}</p>
      </div>
      <img class="line" src="@/assets/media/line-3.svg" alt="" />
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-5'] }}</p>
      </div>
      <img class="line" src="@/assets/media/line-3.svg" alt="" />
      <div class="item">
        <div class="icon">
          <img src="@/assets/media/assignment.svg" alt="" />
        </div>
        <p class="sub">{{ $store.state.translations['main.how-6'] }}</p>
      </div>
    </div>
    <img src="@/assets/media/line-0.svg" alt="" class="arrow" />
  </div>
</template>

<script>
export default {
  props: ['images'],
}
</script>

<style scoped>
.mid {
  margin-top: 50px;
}
.wrap {
  display: grid;
  grid-template-columns: 3fr 4fr 3fr;
  gap: 24px;
  position: relative;
  padding-bottom: 100px;
  max-width: 75%;
  margin: 0 auto;
}
.icon {
  width: 72px;
  height: 72px;
  border-radius: 50%;
  background: #cef3fc;
  box-shadow: inset 0px 0px 24px rgba(255, 255, 255, 0.4);
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  margin-bottom: 16px;
}
.icon img {
  width: 40px;
  height: 40px;
  object-fit: contain;
}
.left,
.right {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
}
.sub {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  text-align: center;
  color: #010e38;
  max-width: 75%;
  margin: 0 auto;
}
.item {
  min-height: 178px;
  width: 100%;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  transition: 0.4s;
  border: 1px solid transparent;
  cursor: pointer;
}
.item:hover {
  background: #ebf5ff;
  border: 1px solid #00a5ff;
}
.download {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #0027dc;
  text-decoration: underline !important;
  text-transform: capitalize;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  position: relative;
  z-index: 9;
}
.arrow {
  position: absolute;
  left: 50%;
  bottom: 56px;
  transform: translateX(-50%);
  width: 78%;
}
@media screen and (max-width: 1024px) {
  .left {
    order: 0;
  }
  .mid {
    order: 2;
  }
  .right {
    order: 1;
  }
  .wrap {
    max-width: 100%;
    grid-template-columns: repeat(1, 1fr);
    padding-bottom: 0;
  }
  .left,
  .right {
    display: flex;
    flex-direction: row;
  }
  .line {
    display: none;
  }
  .pic {
    width: 100%;
  }
  .sub {
    font-weight: 600;
    font-size: 12px;
    line-height: 150%;
    text-align: center;
  }
  .item {
    min-height: none;
  }
  .arrow {
    display: none;
  }
}
</style>
