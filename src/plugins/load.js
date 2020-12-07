export default {
  install(Vue) {
    Vue.prototype.$load = async (action, errHandler) => {
      try {
        await action()
      } catch (error) {
        if (errHandler) {
          errHandler()
        } else {
          if (error.response) {
            console.log(error?.response?.data)
          } else {
            console.error(error)
          }
        }
      }
    }
  }
}
