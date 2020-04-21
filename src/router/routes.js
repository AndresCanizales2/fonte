import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../view/Home.vue";
import siguiente from "../view/siguiente.vue"

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home
  },
  {
    path: "/siguiente",
    name: "siguiente",
    component: siguiente
  }
];

const router = new VueRouter({
  routes,
    linkActiveDataAttributes: true
});

export default router;
