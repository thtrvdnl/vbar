import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'

Vue.use(VueRouter)

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
      if (to.name === 'profile' && store.getters['AUTH_STATUS']) {
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

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
