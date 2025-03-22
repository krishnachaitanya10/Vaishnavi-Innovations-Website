import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVueNext from "bootstrap-vue-next";

// Import Bootstrap & Styles
import "bootstrap/dist/css/bootstrap.min.css";  // Ensure it's minified
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/css/boxicons.min.css";
import "./assets/custom.scss";

const app = createApp(App);

// Use Plugins
app.use(router);
app.use(BootstrapVueNext);

// Mount the Vue App
app.mount("#app");
