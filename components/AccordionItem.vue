<template>
  <li class="accordion__item">
    <div
      class="accordion__trigger"
      :class="{ accordion__trigger_active: visible }"
      @click="open"
    >
      <slot name="accordion-trigger"></slot>
    </div>

    <transition
      name="accordion"
      @enter="start"
      @after-enter="end"
      @before-leave="start"
      @after-leave="end"
    >
      <div
        v-show="visible"
        :class="{ accordion__active: visible }"
        class="accordion__content"
      >
        <ul>
          <slot name="accordion-content"></slot>
        </ul>
      </div>
    </transition>
  </li>
</template>

<script>
/* eslint-disable */

export default {
  inject: ['Accordion'],
  props: {},
  data() {
    return {
      index: null,
    }
  },
  computed: {
    visible() {
      return this.index == this.Accordion.active
    },
  },
  created() {
    this.index = this.Accordion.count++
  },
  methods: {
    open() {
      if (this.visible) {
        this.Accordion.active = 0
      } else {
        this.Accordion.active = this.index
      }
    },
    start(el) {
      el.style.height = el.scrollHeight + 'px'
    },
    end(el) {
      el.style.height = ''
    },
    close() {},
  },
}
</script>

<style scoped>
.accordion__item {
  cursor: pointer;
  position: relative;
  margin-bottom: 24px;
  border: 1px solid #ebebeb;
  border-radius: 12px;
  height: fit-content;
}

.accordion__trigger {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 28px 24px;
  z-index: 9;
  position: relative;
  margin: 0;
}

.accordion__content p,
.accordion__content ul {
  padding: 0 24px 24px 24px;
  margin: 0;
}

.accordion-enter-active,
.accordion-leave-active {
  will-change: height, opacity;
  transition: height 0.3s ease, opacity 0.3s ease;
  overflow: hidden;
}

.accordion-enter,
.accordion-leave-to {
  height: 0 !important;
  opacity: 0;
}
</style>
