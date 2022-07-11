import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'dashboard',
      component: () => import('../views/Dashboard.vue')
    },
    {
      path: '/platforms',
      name: 'platforms',
      component: () => import('../views/Platforms.vue')
    },
    {
      path: '/games',
      name: 'games',
      component: () => import('../views/Games.vue')
    }
  ]
})

export default router
