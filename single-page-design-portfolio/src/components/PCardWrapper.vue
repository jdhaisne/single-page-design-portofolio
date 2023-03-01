<template>
  <div
    class="card__wrapper"
    :class="{
      'card__wrapper--row': isRow,
      'card__wrapper--wrap': isWrap,
      'card__wrapper--big': isBig,
      'card__wrapper--small': isSmall,
    }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  isRow: { type: Boolean },
  isWrap: { type: Boolean },
  isBig: { type: Boolean },
  isSmall: { type: Boolean },
});
</script>

<style lang="scss" scoped>
@use "src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  &--row {
    flex-direction: row;
    justify-content: center;
  }
  &--wrap {
    flex-wrap: wrap;
  }
  &--big {
    margin-bottom: 100px;
    @include respond-to("medium") {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
    }
  }
  &--small {
    @include respond-to("medium") {
      flex-direction: row;
      flex-wrap: wrap;
      max-width: 343px;
      justify-content: start;
    }
  }
}
</style>
