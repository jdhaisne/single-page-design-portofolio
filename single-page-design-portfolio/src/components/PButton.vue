<template>
  <button class="button" :class="buttonClass">
    <span v-if="!isArrow" class="button__content">
      <slot></slot>
    </span>
    <span v-else class="icon icon--very-small" :class="iconClass"> </span>
  </button>
</template>

<script setup>
import { computed } from "vue";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return variant.includes(value);
    },
  },
});

const buttonClass = computed(() => {
  const classArray = [`button--${props.variant}`];
  return classArray;
});
const isArrow = computed(() => {
  return props.variant === "left" || props.variant === "right";
});
const iconClass = computed(() => {
  if (props.variant === "left") return "icon-larr";
  else if (props.variant === "right") return "icon-rarr";
  else return undefined;
});
</script>

<script>
const variant = ["primary", "secondary", "right", "left"];

export default {};
</script>

<style lang="scss" scoped>
@use "src/assets/scss/_variables.scss" as *;
.button {
  height: 64px;
  width: 64px;
  border: none;
  border-radius: 100%;
  background-color: $black;
  &:hover {
    background-color: $galactic-blue;
  }
  &__content {
    color: $white;
    font: $body;
  }
  &--primary {
    height: 56px;
    width: 228px;
    border-radius: 28px;
  }
  &--secondary {
    height: 56px;
    width: 228px;
    border-radius: 28px;
    background-color: $salmon;
    &:hover {
      background-color: $summer-yellow;
    }
  }
}
</style>
