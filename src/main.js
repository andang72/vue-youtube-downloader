import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "./router";

// loading overlay plugin.
import {LoadingPlugin} from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/css/index.css';

// Nucleo Icons
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";

import materialKit from "./material-kit";


// floating vue
import FloatingVue from 'floating-vue'
import 'floating-vue/dist/style.css'

const app = createApp(App);
app.use(createPinia());
app.use(router);
app.use(materialKit);
app.use(LoadingPlugin);
app.use(FloatingVue);
app.mount("#app");
