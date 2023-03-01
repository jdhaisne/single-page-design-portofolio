<template>
  <div class="slideshow" :class="{ 'slideshow--big': isBig }">
    <slot name="title"></slot>
    <div
      class="slides"
      :style="{
        height: props.slideHeight + 'px',
      }"
    >
      <div class="slider">
        <template v-for="(slide, index) in slides">
          <div
            v-if="index === prevIndex"
            class="slide prev"
            :style="{ right: offset + '%' }"
          >
            <img :src="`/src/assets/images/${slide}`" />
          </div>
          <div
            v-if="index === currentIndex"
            class="slide current"
            :style="{ left: offset + '%' }"
          >
            <img :src="`/src/assets/images/${slide}`" />
          </div>
          <div
            v-if="index === nextIndex"
            class="slide next"
            :style="{ left: offset + '%' }"
          >
            <img :src="`/src/assets/images/${slide}`" />
          </div>
          <div class="slide">
            <img :src="`/src/assets/images/${slide}`" />
          </div>
        </template>
      </div>
    </div>

    <div class="slideshow__button__wrapper">
      <PButton variant="left" @click="leftArrowClick"></PButton>
      <PButton variant="right" @click="rightArrowClick"></PButton>
    </div>
  </div>
</template>

<script setup>
import { computed, ref, onMounted, onUnmounted } from "vue";
const props = defineProps({
  slides: { type: Array },
  slideWidth: { type: Number },
  slideHeight: { type: Number },
  gap: { type: Number },
  isBig: { type: Boolean },
});

const prevIndex = computed(() => {
  let newIndex = currentIndex.value - 1;
  if (newIndex < 0) {
    return props.slides.length - 1;
  }
  return newIndex;
});
const nextIndex = computed(() => {
  let newIndex = currentIndex.value + 1;
  if (newIndex > props.slides.length - 1) {
    return 0;
  }
  return newIndex;
});

const calcOffset = () => {
  let offsetPixel;
  let offsetPercent;

  console.log(window.innerWidth, props.slideWidth, props.slideHeight);
  offsetPixel = window.innerWidth / 2 + props.slideWidth / 2 + props.gap;
  offsetPercent = (offsetPixel / window.innerWidth) * 100;

  return offsetPercent;
};
let offset = ref(calcOffset());

let currentIndex = ref(4);

const leftArrowClick = () => {
  let newIndex = currentIndex.value - 1;
  if (newIndex < 0) newIndex = props.slides.length - 1;
  currentIndex.value = newIndex;
  console.log(currentIndex.value);
};

const rightArrowClick = () => {
  let newIndex = currentIndex.value + 1;
  if (newIndex > props.slides.length - 1) newIndex = 0;
  currentIndex.value = newIndex;
  console.log(currentIndex.value);
};

const resized = () => {
  console.log("resize");
  offset.value = calcOffset();
};

onMounted(() => {
  window.addEventListener("resize", resized);
});
onUnmounted(() => {
  window.removeEventListener("resize", resized);
});
</script>

<style lang="scss" scoped>
@use "src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.slideshow {
  text-align: center;
  &__button__wrapper {
    display: flex;
    justify-content: center;
    gap: 8px;
  }
  &--big {
    margin-bottom: 100px;
  }
}
.slides {
  position: relative;
  overflow: hidden;
  margin: 30px auto;
}

.slider {
  position: absolute;
  width: 100%;
  height: 100%;
}

.slide {
  display: none;
  width: 270px;
  height: 180px;
  @include respond-to("medium") {
    width: 540px;
    height: 360px;
  }

  & > img {
    border-radius: 10px;
  }
  &.prev {
    display: block;
    position: absolute;
    top: 0px;
  }
  &.next {
    display: block;
    position: absolute;
    top: 0px;
  }
  &.current {
    display: block;
    margin: auto;
  }
}
</style>
