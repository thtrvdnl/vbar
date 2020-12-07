import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import VueCookies from 'vue-cookies'
import VProgress from 'vue-progressbar'
import LoadPlugin from '@/plugins/load'
import ApiPlugin from '@/plugins/api'

Vue.use(VueCookies)
Vue.use(VProgress)
Vue.use(LoadPlugin)
Vue.use(ApiPlugin)

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
