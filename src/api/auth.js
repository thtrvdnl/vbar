function addAuthorizationHeader(instance, accessToken) {
  instance.defaults.headers.common['Authorization'] = `JWT ${accessToken}`
  return instance
}

export default function(instance) {
  return {
    signUp(payload) {
      return instance.post('auth/users/', payload)
    },
    getAccessToken(payload) {
      return instance.post('auth/jwt/create/', payload)
    },
    getWithJwt(accessToken) {
      addAuthorizationHeader(instance, accessToken)
      return instance.get('auth/users/me/')
    },
    getProfileData(uid, accessToken) {
      addAuthorizationHeader(instance, accessToken)
      return instance.get(`api/profile/${uid}`)
    }
  }
}
