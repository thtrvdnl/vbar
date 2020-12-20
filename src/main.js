import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import VueCookies from 'vue-cookies'
import ApiPlugin from '@/plugins/api'

import 'nprogress/nprogress.css'

Vue.use(VueCookies)
Vue.use(ApiPlugin)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
