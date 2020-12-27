import { addJwt } from '@/utils'

export default function(instance) {
  return {
    signUp(payload) {
      return instance.post('auth/users/', payload)
    },
    getAccessToken(payload) {
      return instance.post('auth/jwt/create/', payload)
    },
    getWithJwt(accessToken) {
      addJwt(instance, accessToken)
      return instance.get('auth/users/me/')
    },
    getProfileData(uid, accessToken) {
      addJwt(instance, accessToken)
      return instance.get(`api/profile/${uid}`)
    }
  }
}
