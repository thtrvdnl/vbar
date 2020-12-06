import { createRouter, createWebHistory } from 'vue-router'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/profile/:username',
    name: 'profile-page',
    component: () => import('@/views/ProfilePage.vue')
  },
  {
    path: '/registration',
    name: 'registration',
    component: () => import('@/views/RegistrationPage.vue')
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/LoginPage.vue')
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
