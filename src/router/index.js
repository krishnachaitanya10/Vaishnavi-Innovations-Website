import { createWebHistory, createRouter } from "vue-router";

// All Pages
import HomePageFour from "../components/Pages/HomePageFour.vue";
import aboutpageone from "../components/Pages/AboutPageOne.vue";
import contactpageone from "../components/Pages/ContactPageOne.vue";

const routes = [
  { path: "/home-four", component: HomePageFour },
  { path: "/about-one", component: aboutpageone },
  { path: "/contact-one", component: contactpageone },
];


const router = createRouter({
  history: createWebHistory(),
  linkExactActiveClass: "active",
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

export default router;