import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCookies from 'vue-cookies'

import LoadPlugin from './plugins/load'
import ApiPlugin from './plugins/api'

import VueProgress from 'vue-top-progress/src/top-progress.vue'

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies)
  .use(LoadPlugin)
  .use(ApiPlugin)
  .component('vue-progress', VueProgress)
  .mount('#app')
