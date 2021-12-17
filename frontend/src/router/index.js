import Vue from "vue";
import VueRouter from "vue-router";
import Smart from "../views/Smart.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "smart",
    component: Smart,
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
