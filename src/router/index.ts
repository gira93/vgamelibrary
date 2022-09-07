import { createRouter, createWebHashHistory } from 'vue-router'

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      redirect: 'games'
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
    },
    {
      path: '/utils',
      name: 'utils',
      component: () => import('../views/Utils.vue')
    }
  ]
})

export default router
