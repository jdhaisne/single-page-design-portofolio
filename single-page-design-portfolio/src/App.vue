<script setup>
import { useMq } from "vue3-mq";
import { onMounted, onUnmounted } from "vue";

const mq = useMq();
</script>

<template>
  <PHeader> </PHeader>
  <PSection>
    <template #title
      ><PTitle size="l"> Design solutions made easy </PTitle></template
    >
    With over ten years of experience in various design disciplines, I’m your
    one-stop shop for your design needs.
  </PSection>

  <pCardWrapper isBig>
    <PCard
      imgSrc="/src/assets/images/pattern-graphic-design.svg"
      imgAlt="pattern graphic design"
      width="343px"
      height="364px"
      backgroundColor="#755CDE"
    >
      Graphic Design
    </PCard>
    <PCardWrapper isRow isWrap isSmall>
      <PCard
        imgSrc="/src/assets/images/pattern-ui-ux.svg"
        imgAlt="pattern ui ux"
        width="159px"
        height="182px"
        backgroundColor="#F6A560"
      >
        UI/UX
      </PCard>

      <PCard
        imgSrc="/src/assets/images/pattern-apps.svg"
        imgAlt="pattern apps"
        width="159px"
        height="182px"
        backgroundColor="#F39E9E"
      >
        Apps
      </PCard>
      <PCard
        imgSrc="/src/assets/images/pattern-illustrations.svg"
        imgAlt="pattern illustrations"
        width="343px"
        height="158px"
        backgroundColor="#EB7565"
      >
        Illustrations
      </PCard>
    </PCardWrapper>
    <PCardWrapper :isRow="mq.md">
      <PCard
        imgSrc="/src/assets/images/pattern-photography.svg"
        imgAlt="pattern photography"
        width="343px"
        height="182px"
        backgroundColor="#61C4B7"
      >
        Photography
      </PCard>

      <PCard
        imgSrc="/src/assets/images/pattern-motion-graphics.svg"
        imgAlt="pattern motion graphics"
        width="343px"
        height="182px"
        backgroundColor="#552049"
        >Motion Graphics
      </PCard>
    </PCardWrapper>
  </pCardWrapper>

  <PSection
    imgSrc="/src/assets/images/image-amy.webp"
    buttonText="Free Consultation"
    isBig
  >
    <template #title>
      <PTitle size="xs">
        I’m Amy, and I’d love to work on your next project
      </PTitle>
    </template>
    I love working with others to create beautiful design solutions. I’ve
    designed everything from brand illustrations to complete mobile apps. I’m
    also handy with a camera!
  </PSection>
  <PSlideshow
    v-if="mq.sm"
    :slides="[
      'image-slide-1.jpg',
      'image-slide-2.jpg',
      'image-slide-3.jpg',
      'image-slide-4.jpg',
      'image-slide-5.jpg',
    ]"
    :slideWidth="270"
    :slideHeight="180"
    :gap="12"
    isBig
  >
    <template #title><PTitle size="xs"> My Work</PTitle></template> </PSlideshow
  ><PSlideshow
    v-else
    :slides="[
      'image-slide-1.jpg',
      'image-slide-2.jpg',
      'image-slide-3.jpg',
      'image-slide-4.jpg',
      'image-slide-5.jpg',
    ]"
    :slideWidth="540"
    :slideHeight="360"
    :gap="15"
  >
    <template #title><PTitle size="xs"> My Work</PTitle></template>
  </PSlideshow>

  <PSection buttonText="Free Consultation" isBlack>
    <template #title>
      <PTitle size="xs"> Book a call with me </PTitle> </template
    >I’d love to have a chat to see how I can help you. The best first step is
    for us to discuss your project during a free consultation. Then we can move
    forward from there.
  </PSection>
  <PHeader> </PHeader>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
