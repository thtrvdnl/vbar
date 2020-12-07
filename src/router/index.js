import { createRouter, createWebHistory } from 'vue-router'

import $cookies from 'vue-cookies'

const routes = [
  {
    path: '/',
    redirect: '/login'
  },
  {
    path: '/profile/:username',
    name: 'profile',
    component: () => import('@/views/ProfilePage.vue'),
    beforeEnter: (to, _, next) => {
      if (to.name === 'profile' && !!$cookies.get('accept_token')) {
        next()
      } else {
        next({ name: 'login' })
      }
    }
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
