import { createWebHistory, createRouter } from "vue-router";

// Import Pages
import HomePageFour from "../components/Pages/HomePageFour.vue";
import AboutPageOne from "../components/Pages/AboutPageOne.vue";
import ContactPageOne from "../components/Pages/ContactPageOne.vue";

const routes = [
  { path: "/", redirect: "/home-four" }, // Redirect root to HomePageFour
  { path: "/home-four", name: "Home", component: HomePageFour },
  { path: "/about-one", name: "About", component: AboutPageOne },
  { path: "/contact-one", name: "Contact", component: ContactPageOne },
  { path: "/:pathMatch(.*)*", redirect: "/" }, // Catch-all route for 404 handling
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
