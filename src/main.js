import "./assets/style.css";

import { createApp } from "vue";
import App from "./App.vue";
import BaseCard from "./components/UI/BaseCard.vue";
import VeeValidatePlugin from "./plugins/validate";

const app = createApp(App);

app.component("BaseCard", BaseCard);

app.use(VeeValidatePlugin);

app.mount("#app");
