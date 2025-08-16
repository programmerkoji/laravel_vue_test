import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "./assets/main.css";
import "./assets/tailwind.css"

import "./assets/main.css";
import { createVuetify } from "vuetify";
import * as components from "vuetify/components";
import * as directives from "vuetify/directives";
import { createPinia } from "pinia";

const pinia = createPinia();
const app = createApp(App);

const vuetify = createVuetify({
  components,
  directives,
});

app.use(vuetify).use(router).use(pinia);

app.mount("#app");
