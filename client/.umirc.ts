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
          title: "Order"
        },
        {
          path: '/user',
          component: "@/pages/user/index",
          title: "User"
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
      ]
    },
  ],
});
