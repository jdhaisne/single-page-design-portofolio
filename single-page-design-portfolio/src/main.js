import { createApp } from "vue";

import "./assets/scss/index.scss";
import App from "./App.vue";

import { Vue3Mq } from "vue3-mq";

import PButton from "./components/PButton.vue";
import PHeader from "./components/PHeader.vue";
import PSection from "./components/PSection.vue";
import PCard from "./components/PCard.vue";
import PCardWrapper from "./components/PCardWrapper.vue";
import PTitle from "./components/PTitle.vue";
import PSlideshow from "./components/PSlideshow.vue";

const app = createApp(App);

app.use(Vue3Mq, {
  breakpoints: {
    sm: 0,
    md: 768,
    lg: 1200,
  },
});

app
  .component("PButton", PButton)
  .component("PHeader", PHeader)
  .component("PSection", PSection)
  .component("PCard", PCard)
  .component("PCardWrapper", PCardWrapper)
  .component("PTitle", PTitle)
  .component("PSlideshow", PSlideshow);

app.mount("#app");
