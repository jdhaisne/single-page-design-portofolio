<template>
  <div
    class="card"
    :style="{
      'background-color': backgroundColor,
      width: width,
      height: height,
    }"
  >
    <img class="card__img" :src="imgSrc" :alt="imgAlt" />
    <span class="card__text"><slot></slot></span>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: { type: String },
  imgAlt: { type: String },
  backgroundColor: { type: String },
  width: { type: String },
  height: { type: String },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
.card {
  margin: 0px;
  border-radius: 8px;
  position: relative;
  &__img {
    position: absolute;
    top: 24px;
    right: 24px;
  }
  &__text {
    position: absolute;
    bottom: 24px;
    left: 24px;
    color: $white;
  }
}
</style>
