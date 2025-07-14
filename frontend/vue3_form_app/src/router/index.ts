import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../pages/ContactListPage.vue')
    },
    {
      path: '/create',
      name: 'create',
      component: () => import('../pages/ContactCreatePage.vue')
    },
  ]
})

export default router
