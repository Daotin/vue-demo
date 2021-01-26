import VueRouter from "vue-router";

import Test from "./components/Test.vue";

export default new VueRouter({
  mode: "history",
  base: "/",
  routes: [
    // {path:'*',component:app, redirect:'/app/f'},
    { path: "test", component: Test }
  ]
});
