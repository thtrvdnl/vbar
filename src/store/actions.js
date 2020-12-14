import $load from '@/plugins/load'
import $api from '@/api/index'
import $cookies from 'vue-cookies'
import getWithJwt from '@/api/get_with_jwt'
import { updateProfle } from '@/api/update_data'
import { toSnake } from '@/utils'

import axios from 'axios'

export default {
  SET_COOKIE({ commit }, payload) {
    commit('SET_COOKIE', payload)
  },
  SET_USER_DATA({ commit }, payload) {
    commit('SET_USER_DATA', payload)
  },
  UPDATE_PROFILE({ commit, getters }, payload) {
    // return $load(async () => {
    //   const jwtToken = $cookies.get('access_token')
    //   if (jwtToken) {
    //     const snakePayload = {}
    //     Object.entries(payload).forEach(e => (snakePayload[toSnake(e[0])] = e[1]))
    //     const res = await updateProfle(jwtToken, getters['USER_ID'], snakePayload)
    //     return res
    //   }
    //   return null
    // })
    const jwtToken = $cookies.get('access_token')
    const snakePayload = {}
    Object.entries(payload).forEach(e => (snakePayload[toSnake(e[0])] = e[1]))
    return axios.put(`http://localhost:8000/api/profile/${getters['USER_ID']}/`, {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        Authorization: `JWT ${jwtToken}`
      },
      body: snakePayload
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
