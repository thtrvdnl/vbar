export default function(instance) {
  return {
    signIn(payload, jwtToken) {
      return instance.post('auth/users/me/', payload, jwtToken)
    },
    signUp(payload) {
      return instance.post('auth/users/', payload)
    },
    getAccessToken(payload) {
      return instance.post('auth/jwt/create/', payload)
    },
    logout() {
      //todo
    }
  }
}
