import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/product/Details"
import Register from "../views/product/Register"
import Edit from "../views/product/Edit"

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
    props: route =>({page: parseInt(route.query.page) || 1})

  },
  {
    path: "/product/:id",
    name: "ProductDetails",
    props:true,
    component: ProductDetails,
  },
  {
    path: "/product/:id/register",
    name: "Register",
    props:true,
    component: Register,
  },
  {
    path: "/product/:id/edit",
    name: "Edit",
    props:true,
    component: Edit,
  },
  
  {
    path: "/about",
    name: "About",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/About.vue"),
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
