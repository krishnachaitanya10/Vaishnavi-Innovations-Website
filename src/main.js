import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import BootstrapVueNext from "bootstrap-vue-next";

// Import Bootstrap CSS
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";

// Import custom styles
import "./assets/css/boxicons.min.css";
import "./assets/custom.scss";

const app = createApp(App);

// Use plugins
app.use(router);
app.use(BootstrapVueNext);

// Mount the app
app.mount("#app");
