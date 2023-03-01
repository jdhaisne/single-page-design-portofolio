<template>
  <div
    class="card__wrapper"
    :class="{ 'card__wrapper--row': isRow, 'card__wrapper--wrap': isWrap }"
  >
    <slot></slot>
  </div>
</template>

<script setup>
const props = defineProps({
  isRow: { type: Boolean },
  isWrap: { type: Boolean },
});
</script>

<style lang="scss" scoped>
.card__wrapper {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 12px;
  &--row {
    flex-direction: row;
    justify-content: center;
  }
  &--wrap {
    flex-wrap: wrap;
  }
}
</style>
