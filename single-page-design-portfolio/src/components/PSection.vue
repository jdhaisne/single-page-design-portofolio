<template>
  <div
    class="section"
    :class="{ 'section--black': isBlack, 'section--big': isBig }"
  >
    <div class="section__img__wrapper" v-if="imgSrc">
      <img class="section__img" :src="imgSrc" :alt="imgAlt" />
    </div>
    <div class="section__bottom">
      <div
        class="section__title section__content"
        :class="{ 'section__title--black': isBlack }"
      >
        <slot name="title"></slot>
      </div>
      <div
        class="section__body section__content"
        :class="{ 'section__body--black': isBlack }"
      >
        <slot></slot>
      </div>
      <PButton class="section__button" variant="secondary" v-if="buttonText">{{
        buttonText
      }}</PButton>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imgSrc: { type: String },
  imgAlt: { type: String },
  buttonText: { type: String },
  isBlack: { type: Boolean },
  isBig: { type: Boolean },
});
</script>

<style lang="scss" scoped>
@use "/src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.section {
  text-align: center;
  margin: auto 6%;
  border-radius: 10px;

  &__body {
    color: $medium-brown;
    font: $body-mobile;
    margin: 24px 0px;
    @include respond-to("medium") {
      font: $body;
    }
    &--black {
      color: $light-cream;
    }
  }
  &__title--black {
    color: $light-cream;
  }
  &__content {
    margin: 12px 0px;
    max-width: 740px;
  }
  &__img {
    &__wrapper {
      margin: 30px 0px;
    }
  }
  &--black {
    background-color: $black;
    padding: 49px 24px;
  }
  &--big {
    margin-bottom: 100px;
  }
}
</style>
