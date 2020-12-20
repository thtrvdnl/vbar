import Vue from 'vue'
import VueRouter from 'vue-router'

import store from '@/store'
import NProgress from 'nprogress'

Vue.use(VueRouter)

const beforeEnterGuard = (to, _, next) => {
  if (store.getters['AUTH_STATUS']) {
    next()
  } else {
    next({ name: 'login' })
  }
}

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/login'
    },
    {
      path: '/profile/:username',
      name: 'profile',
      component: () => import('@/views/ProfilePage.vue'),
      beforeEnter: beforeEnterGuard
    },
    {
      path: '/profile/:username/edit',
      name: 'profile-edit',
      component: () => import('@/views/EditProfilePage.vue'),
      beforeEnter: beforeEnterGuard
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
})

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start()
  next()
})

router.afterEach((routeTo, routeFrom) => {
  NProgress.done()
})

export default router
