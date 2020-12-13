import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import actions from './actions'
import getters from './getters'
import initialState from './initial_state'

import { saveStatePlugin } from '@/utils'

Vue.use(Vuex)

const localState = JSON.parse(localStorage.getItem('state'))
if (!localState) {
  localStorage.setItem('state', JSON.stringify(initialState))
}

const currentState = JSON.parse(localStorage.getItem('state'))

export default new Vuex.Store({
  namespaced: true,
  plugins: [saveStatePlugin],
  state: {
    isAuthorized: false,
    ...currentState
  },
  mutations,
  actions,
  getters
})
