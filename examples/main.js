import { createApp } from "vue";
import App from "./App.vue";

import ColorPicker from "./../packages/index";

const app = createApp(App);

app.use(ColorPicker).mount("#app", true);
