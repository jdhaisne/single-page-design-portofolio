<template>
  <button class="button" :class="buttonClass">
    <span v-if="!isArrow" class="button__content">
      <div class="button__content" :class="slotClass">
        <slot></slot>
      </div>
    </span>
    <span v-else class="icon icon--very-small" :class="iconClass"> </span>
  </button>
</template>

<script setup>
import { computed } from "vue";
import { useMq } from "vue3-mq";

const props = defineProps({
  variant: {
    type: String,
    default: "primary",
    validator(value) {
      return variant.includes(value);
    },
  },
});

const mq = useMq();

const buttonClass = computed(() => {
  const classArray = [`button--${props.variant}`];
  if (mq.sm && !isArrow) classArray.push("button--mobile");
  return classArray;
});

const slotClass = computed(() => {
  const classArray = [];
  if (mq.sm) classArray.push("button__content--mobile");
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
    &--mobile {
      font: $body-mobile;
    }
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
  &--mobile {
    height: 44px;
    width: 176px;
  }
}
</style>
