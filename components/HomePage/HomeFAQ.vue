<template>
  <div class="wrap w-100">
    <div id="faq" class="box">
      <div class="row">
        <div class="col-lg-6 col-xs-12 left">
          <div
            class="dropdown"
            v-for="item in firstHalf"
            :key="item.id"
            @click="dropAction(item.id)"
            :class="{ heightAuto: dropVal == item.id }"
          >
            <div class="dropdown-button">
              <h5>
                {{ item.question }}
              </h5>
              <span :class="{ rotate180: dropVal == item.id }">
                <img src="@/assets/media/chevron.svg" alt="" />
              </span>
            </div>
            <Transition name="bounceDrop">
              <div v-html="item.answer" class="dropdown-board"></div>
            </Transition>
          </div>
        </div>
        <div class="col-lg-6 col-xs-12 right">
          <div
            v-for="item in secondHalf"
            :key="item.id"
            class="dropdown"
            @click="dropAction(item.id)"
            :class="{ heightAuto: dropVal == item.id }"
          >
            <div class="dropdown-button">
              <h5>
                {{ item.question }}
              </h5>
              <span :class="{ rotate180: dropVal == item.id }">
                <img src="@/assets/media/chevron.svg" alt="" />
              </span>
            </div>
            <Transition name="bounceDrop">
              <div v-html="item.answer" class="dropdown-board"></div>
            </Transition>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
/* eslint-disable */

export default {
  components: {},

  data() {
    return {
      dropVal: false,
      firstHalf: '',
      secondHalf: '',
    }
  },

  props: ['faq'],

  mounted() {
    const half = Math.ceil(this.faq.length / 2)

    const firstHalf = this.faq.slice(0, half)
    const secondHalf = this.faq.slice(half)

    ;(this.firstHalf = firstHalf), (this.secondHalf = secondHalf)
  },

  methods: {
    dropAction(val) {
      if (val != this.dropVal) {
        this.dropVal = val
      } else {
        this.dropVal = false
      }
    },
  },
}
</script>

<style scoped>
.wrap {
  min-height: 47vh;
}
.title {
  font-weight: 700;
  font-size: 18px;
  line-height: 150%;
  color: #010e38;
  max-width: 90%;
}
.txt {
  font-weight: 400;
  font-size: 18px;
  line-height: 150%;
  color: #010e38;
}
.bounceDrop-enter-active {
  animation: bounceDrop-in 0.3s;
}
.bounceDrop-leave-active {
  animation: bounceDrop-in 0.3s reverse;
}
@keyframes bounceDrop-in {
  0% {
    transform: translateY(-20%);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
}
.dropdown {
  border-radius: 24px;
  border: 1px solid #dbdee8;
  background: var(--white, #fff);
  margin-bottom: 16px;
  max-height: 72px;
  overflow: hidden;
  transition: 0.4s;
}
.dropdown.heightAuto {
  max-height: 100%;
  border: 1px solid #dbdee8;
  background: var(--thin-air-blue, #ebf5ff);
}
.dropdown-button span {
  transition: 0.4s;
}
.dropdown-button span.rotate180 {
  transform: rotate(180deg);
}
.dropdown-button {
  padding: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  color: var(--black, #010e38);
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
}
.dropdown-button h5 {
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  transition: 0.4s;
}
.dropdown.heightAuto .dropdown-button h5 {
  -webkit-line-clamp: 5;
}
.dropdown.heightAuto .dropdown-button {
  border-bottom: 1px solid #dbdee8;
}
.dropdown.heightAuto .dropdown-board {
  padding: 24px;
}
.dropdown-board {
  padding: 24px;
  transition: 0.4s;
  color: #010e38;
  font-size: 18px;
  line-height: 150%;
}
.left {
  padding-right: 12px;
}
.right {
  padding-left: 12px;
}
@media screen and (max-width: 1024px) {
  .dropdown {
    max-height: 80px;
  }
}
</style>
