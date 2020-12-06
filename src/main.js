import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import VueCookies from 'vue-cookies'

import LoadPlugin from './plugins/load'
import ApiPlugin from './plugins/api'

createApp(App)
  .use(store)
  .use(router)
  .use(VueCookies)
  .use(LoadPlugin)
  .use(ApiPlugin)
  .mount('#app')