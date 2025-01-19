import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/Home.vue'),
    },
    {
      path: '/Office/:slug',
      name: 'office',
      component: () => import('../views/Office.vue'),
    },
    {
      path: '/edit-office/:slug',
      name: 'office-edit',
      component: () => import('../views/ManageOffice.vue'),
    },
    {
      path: '/new-office',
      name: 'office-add',
      component: () => import('../views/ManageOffice.vue'),
    },
    {
      path: '/:catchAll(.*)',
      name: '404',
      component: () => import('../views/404.vue'),
    },
  ],
})

export default router
