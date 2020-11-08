import { createApp, defineComponent } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fas)
defineComponent('faw-icon', FontAwesomeIcon)

createApp(App)
  .use(store)
  .use(router)
  .mount('#app')
