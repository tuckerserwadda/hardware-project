import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import ProductDetails from "../views/product/Details.vue"
import Register from "../views/product/Register.vue"
import ProductLayout from "../views/product/Layout.vue"
import Edit from "../views/product/Edit.vue"

const routes = [

  {
    path: "/",
    name: "Home",
    component: Home,
    props: route =>({page: parseInt(route.query.page) || 1})

  },
  {
    path: "/product/:id",
    name: "ProductLayout",

    component: ProductLayout,
    children:[
      {
        path: "",
        name: "ProductDetails",
        component: ProductDetails,
      },
      {
        path: "register",
        name: "Register",
        component: Register,
      },
      {
        path: "edit",
        name: "Edit",
        component: Edit,
      },

    ]
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
