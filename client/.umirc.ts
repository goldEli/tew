import { defineConfig } from 'umi';

export default defineConfig({
  nodeModulesTransform: {
    type: 'none',
  },
  routes: [
    {
      path: '/',
      component: '@/layouts/index',
      routes: [
        {
          path: '/',
          component: "@/pages/home/index",
          title: "Home"
        },
        {
          path: '/order',
          component: "@/pages/order/index",
          title: "Order",
          auth: true,
        },
        {
          path: '/user',
          component: "@/pages/user/index",
          title: "User",
          auth: true,
        },
        {
          path: '/user/edit',
          component: "@/pages/user/edit/index",
          title: "Edit",
          auth: true,
        },
        {
          path: '/search',
          component: "@/pages/search/index",
          title: "Search"
        },
        {
          path: '/observer',
          component: "@/pages/observer",
          title: "Search"
        },
        {
          path: '/house',
          component: "@/pages/house",
          title: "House"
        },
        {
          path: '/login',
          component: "@/pages/login",
          title: "Login"
        },
        {
          path: '/register',
          component: "@/pages/register",
          title: "Register"
        },
      ]
    },
  ],
});
