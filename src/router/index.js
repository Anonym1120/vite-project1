import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "Dashboard",
      redirect: "/Dashboard",
    },
    {
      path: "/",
      name: "Home",
      component: () => import(/* webpackChunkName: "Home" */ "../views/Home.vue"),
      children: [
        {
          path: "/Dashboard",
          name: "Dashboard",
          meta: { title: "首頁" },
          component: () => import(/* webpackChunkName: "Dashboard" */ "../views/Dashboard.vue"),
        },
      ],
    },
  ],
})

export default router
