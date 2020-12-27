import $cookies from 'vue-cookies'
import { convertKeys, toCamel } from '@/utils'

export default {
  SET_COOKIE(_, { key, value }) {
    $cookies.set(key, value)
  },
  SET_USER_DATA(state, currentUserData) {
    if ($cookies.get('access_token')) {
      state.user = convertKeys(currentUserData, toCamel)
      state.isAuthorized = true
    }
  },
  UPDATE_PROFILE(state, payload) {
    state.user = { ...state.user, ...payload }
  }
}
