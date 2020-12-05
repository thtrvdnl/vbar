import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import LoadPlugin from './plugins/load'
import ApiPlugin from './plugins/api'

createApp(App)
  .use(store)
  .use(router)
  .use(LoadPlugin)
  .use(ApiPlugin)
  .mount('#app')
