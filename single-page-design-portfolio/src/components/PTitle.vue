<template>
  <h1 :class="titleClass"><slot></slot></h1>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  size: {
    type: String,
    default: "l",
    validator(value) {
      return sizes.includes(value);
    },
  },
});

const titleClass = computed(() => {
  const classArray = [`title--${props.size}`];
  return classArray;
});
</script>

<script>
const sizes = ["l", "m", "s", "xs"];

export default {};
</script>

<style lang="scss" scoped>
@use "src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;
.title {
  &--l {
    font: $heading-l-mobile;
    @include respond-to("medium") {
      font: $heading-l-tablet;
    }
    @include respond-to("large") {
      font: $heading-l;
    }
  }
  &--m {
    font: $heading-m;
  }
  &--s {
    font: $heading-s;
  }
  &--xs {
    font: $heading-xs;
  }
}
</style>
