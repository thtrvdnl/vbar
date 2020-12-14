import Vue from 'vue'

export default async function(action, errHandler) {
  try {
    Vue.prototype.$Progress.start()
    return await action()
  } catch (error) {
    if (errHandler) {
      errHandler()
    } else {
      Vue.prototype.$Progress.fail()
      if (error.response) {
        console.log(error?.response?.data)
      } else if (error.message) {
        console.log(error.message)
      } else {
        console.log(error)
      }
    }
  } finally {
    Vue.prototype.$Progress.finish()
  }
}
