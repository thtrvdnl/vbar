import $load from '@/plugins/load'
import $api from '@/api/index'
import { convertKeys, toCamel, toSnake } from '@/utils'
import $cookies from 'vue-cookies'

export default {
  UPDATE_PROFILE({ state, commit }, newUserData) {
    return $load(async () => {
      newUserData = { ...state.user, ...newUserData }
      delete newUserData.avatar

      const { status, data } = await $api.profile.updateData(
        $cookies.get('access_token'),
        convertKeys(newUserData, toSnake)
      )

      if (status === 200 || status === 201) {
        const result = convertKeys(data, toCamel)
        console.log(result)
        commit('UPDATE_PROFILE', result)
        return result
      }
      return null
    })
  },
  SIGN_UP({ commit }, payload) {
    return $load(async () => {
      const { status, data } = await $api.auth.signUp(payload)

      if (status === 200 || status === 201) {
        return data
      }
    })
  },
  SEND_USER_DATA({ commit }, payload) {
    return $load(async () => {
      const { status, data: token } = await $api.auth.getAccessToken(payload)

      if (status === 200 || status === 201) {
        commit('SET_COOKIE', { key: 'access_token', value: token.access })
        return this.dispatch('GET_USER_DATA', token.access)
      }
    })
  },
  GET_USER_DATA({ commit }, accessToken) {
    return $load(async () => {
      const { status, data } = await $api.auth.getWithJwt(accessToken)

      if (status === 200 || status === 201) {
        return this.dispatch('GET_PROFILE_DATA', { accessToken, uid: data.id })
      }
    })
  },
  GET_PROFILE_DATA({ commit }, { accessToken, uid }) {
    return $load(async () => {
      const { status, data: user } = await $api.auth.getProfileData(uid, accessToken)

      if (status === 200 || status === 201) {
        commit('SET_USER_DATA', user)
        return user.username
      }
    })
  }
}
