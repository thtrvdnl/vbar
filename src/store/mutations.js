import $cookies from 'vue-cookies'
import { toCamel } from '@/utils'

export default {
  SET_COOKIE(_, { key, value }) {
    $cookies.set(key, value)
  },
  SET_USER_DATA(state, currentUserData) {
    if ($cookies.get('access_token')) {
      const dataToSet = {}
      Object.entries(currentUserData).forEach(entry => (dataToSet[toCamel(entry[0])] = entry[1]))
      state.user = dataToSet
      state.isAuthorized = true
    }
  }
}
