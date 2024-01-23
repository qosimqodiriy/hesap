<template>
  <div class="wrap w-100">
    <div class="row">
      <div class="col-lg-6 col-xs-12">
        <img class="pic" :src="images[1].image" alt="" />
      </div>
      <div class="col-lg-6 col-xs-12 gidle">
        <div class="items">
          <div class="item">
            <img src="@/assets/media/chance-1.svg" alt="" class="icon" />
            <h4 class="name">
              {{ $store.state.translations['main.chance-title-1'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.chance-txt-1'] }}
            </p>
          </div>
          <div class="item">
            <img src="@/assets/media/chance-2.svg" alt="" class="icon" />
            <h4 class="name">
              {{ $store.state.translations['main.chance-title-2'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.chance-txt-2'] }}
            </p>
          </div>
          <div class="item">
            <img src="@/assets/media/chance-3.svg" alt="" class="icon" />
            <h4 class="name">
              {{ $store.state.translations['main.chance-title-3'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.chance-txt-3'] }}
            </p>
          </div>
          <div class="item">
            <img src="@/assets/media/chance-4.svg" alt="" class="icon" />
            <h4 class="name">
              {{ $store.state.translations['main.chance-title-4'] }}
            </h4>
            <p class="sub">
              {{ $store.state.translations['main.chance-txt-4'] }}
            </p>
          </div>
        </div>
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
.pic {
  pointer-events: none;
  width: 100%;
  height: 100%;
  object-fit: contain;
}
.items {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 36px;
}
.item {
  background: #ffffff;
  border: 1px solid #dbdee8;
  border-radius: 40px;
  padding: 24px;
  min-height: 380px;
  transition: 0.4s;
}
.item:hover {
  background: #ebf5ff;
  border: 1px solid #dbdee8;
}
.icon {
  width: 72px;
  height: 72px;
  object-fit: contain;
  margin-bottom: 24px;
}
.name {
  font-weight: 700;
  font-size: 24px;
  line-height: 120%;
  text-transform: uppercase;
  color: #0027dc;
  font-family: var(--font-halvar-bold);
  margin-bottom: 12px;
}
.sub {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #010e38;
}
.gidle {
  display: flex;
  align-items: center;
}
@media screen and (max-width: 1024px) {
  .items {
    grid-template-columns: repeat(1, 1fr);
  }
}
</style>
