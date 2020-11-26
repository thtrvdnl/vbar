import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    name: 'profile-page',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/AuthPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
