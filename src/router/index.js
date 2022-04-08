import { createWebHistory, createRouter } from "vue-router";
import { defineAsyncComponent } from "vue";

const Home = defineAsyncComponent(() => import("../pages/Home.vue"));

import About from "../components/HomeItems/About.vue";
// import Home from "../pages/Home.vue";
const routes = [
  { path: "/", redirect: "/home" },
  {
    path: "/home",
    component: Home,
  },
];

const router = new createRouter({
  history: createWebHistory(),
  routes: routes,
});

export default router;
