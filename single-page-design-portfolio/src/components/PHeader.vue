<template>
  <header class="header">
    <img class="header__logo" src="/src/assets/images/logo.svg" />
    <PButton>Free Consultation</PButton>
  </header>
</template>

<script setup>
// import { computed } from "vue";
// import { useMq } from "vue3-mq";

// const mq = useMq();

// const imgClass = computed(() => {
//   const classArray = [];
//   if (mq.sm) classArray.push("header__logo--mobile");
//   return classArray;
// });
</script>

<style lang="scss" scoped>
@use "src/assets/scss/_variables.scss" as *;
@use "src/assets/scss/_mixins.scss" as *;

.header {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  padding: 16px;
  &__logo {
    height: 64px;
    width: 64px;
    @include respond-to("small") {
      width: 48px;
      height: 48px;
    }
  }
}
</style>
