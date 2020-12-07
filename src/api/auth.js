export default function(instance) {
  return {
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
