import Vue from 'vue'
import App from '@/App.vue'
import router from '@/router'
import store from '@/store'

import VueCookies from 'vue-cookies'
import VueProgressBar from 'vue-progressbar'
import ApiPlugin from '@/plugins/api'

const options = {
  color: '#0000ff',
  failedColor: '#ff0000',
  thickness: '5px',
  transition: {
    speed: '0.2s',
    opacity: '0.6s',
    termination: 300
  },
  autoRevert: true,
  inverse: false
}

Vue.use(VueCookies)
Vue.use(VueProgressBar, options)
Vue.use(ApiPlugin)

Vue.config.productionTip = false

export default new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
