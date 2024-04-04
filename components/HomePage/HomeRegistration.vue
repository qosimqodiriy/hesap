<template>
  <div class="wrap">
    <div class="box">
      <div class="cardo">
        <div class="row">
          <div class="col-lg-6 col-xs-12 left">
            <h4 class="title">
              {{ $store.state.translations['main.registrate'] }}
            </h4>
            <p class="txt">
              {{ $store.state.translations['main.registrate-txt-1'] }}
            </p>
            <p class="txt">
              {{ $store.state.translations['main.registrate-txt-2'] }}
            </p>
            <div class="buttons">
              <a target="_blank" href="https://apps.apple.com/uz/app/hesap/id6444673015" class="blue">
                <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path
                    d="M21.333 15.167V18.214C21.333 19.871 19.99 21.214 18.333 21.214H5.66699C4.00999 21.214 2.66699 19.871 2.66699 18.214V15.167M17.748 10.777L12.035 16.49L6.32199 10.777M12.035 3.177V16.473"
                    stroke="#0053dc" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                    stroke-linejoin="round" />
                </svg>
                {{ $store.state.translations['main.download'] }}</a>
            </div>
          </div>
          <div class="col-lg-6 col-xs-12 right">
            <!-- <img src="@/assets/media/phone.svg" alt="" class="pic" /> -->
            <img src="@/assets/media/round.svg" alt="" class="round" />
            <video autoplay muted playsinline loop :src="images[5].image" class="pic"></video>
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
.cardo {
  background: radial-gradient(225.42% 620.37% at 0% -22.05%,
      #cef3fc 0%,
      #00a5ff 28.12%,
      #0053dc 64.06%,
      #0027dc 100%);
  border-radius: 40px;
  padding: 50px 152px;
  overflow: hidden;
}

.pic {
  width: 100%;
}

.left {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.wrap {
  padding: 90px 0 0 0;
}

.title {
  font-weight: 800;
  font-size: 40px;
  line-height: 120%;
  text-transform: uppercase;
  color: #ffffff;
  margin-bottom: 24px;
  font-family: var(--font-halvar-black);
}

.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #ffffff;
  margin-bottom: 24px;
  max-width: 90%;
}

.buttons {
  display: flex;
  align-items: center;
  gap: 14px;
}

.blue {
  background: white;
  border-radius: 16px;
  padding: 16px 32px;
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #0053dc;
  border: 2px solid transparent;
  transition: 0.4s;
  display: flex;
  align-items: center;
  gap: 16px;
}

.blue:hover {
  background: #0027dc;
  color: white;
}

.blue svg path {
  transition: 0.4s;
}

.blue:hover svg path {
  stroke: white;
}

.white {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: white;
  border: 2px solid white;
  border-radius: 16px;
  padding: 16px 32px;
  transition: 0.4s;
}

.white:hover {
  background: #0027dc;
  color: white;
  border-color: #0027dc;
}

.right {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.round {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 480px;
  height: 480px;
}

.pic {
  width: auto;
  height: 500px;
  border-radius: 40px;
  position: relative;
  z-index: 9;
}

@media screen and (max-width: 1024px) {
  .cardo {
    padding: 24px;
    border-radius: 16px;
  }

  .title {
    font-weight: 800;
    font-size: 20px;
    line-height: 120%;
  }

  .buttons {
    flex-direction: column;
  }

  .buttons a {
    width: 100%;
    text-align: center;
  }

  .left {
    margin-bottom: 40px;
  }
}
</style>
