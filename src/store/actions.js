import $load from '@/plugins/newLoad'
import $api from '@/api/index'
import getWithJwt from '@/api/get_with_jwt'

export default {
  SET_COOKIE({ commit }, payload) {
    commit('SET_COOKIE', payload)
  },
  SET_USER_DATA({ commit }, payload) {
    commit('SET_USER_DATA', payload)
  },
  SEND_USER_DATA({ commit }, payload) {
    return $load(async () => {
      const { status, data: tokens } = await $api.auth.getAccessToken(payload)

      if (status === 200 || status === 201) {
        commit('SET_COOKIE', { key: 'access_token', value: tokens.access })
        return this.dispatch('GET_USER_DATA', tokens.access)
      }
    })
  },
  GET_USER_DATA({ commit }, accessToken) {
    return $load(async () => {
      const { status, data } = await getWithJwt(accessToken, 'auth/users/me/')

      if (status === 200 || status === 201) {
        return this.dispatch('GET_PROFILE_DATA', { accessToken, uid: data.id })
      }
    })
  },
  GET_PROFILE_DATA({ commit }, { accessToken, uid }) {
    return $load(async () => {
      const { status, data: user } = await getWithJwt(accessToken, `api/profile/${uid}`)

      if (status === 200 || status === 201) {
        commit('SET_USER_DATA', user)
        return user.username
      }
    })
  }
}
