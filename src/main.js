import { createApp } from "vue";
import App from "./App.vue";
import router from "./router"; // Import router
import BootstrapVueNext from "bootstrap-vue-next";

// Import Styles
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-vue-next/dist/bootstrap-vue-next.css";
import "./assets/css/boxicons.min.css";
import "./assets/custom.scss"; 

const app = createApp(App);
app.use(router); // Use router
app.use(BootstrapVueNext);
app.mount("#app"); // Mount the app
