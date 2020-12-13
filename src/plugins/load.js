export default {
  install(Vue) {
    Vue.prototype.$load = async (action, pb, errHandler) => {
      try {
        pb.start()
        await action()
      } catch (error) {
        if (errHandler) {
          errHandler()
        } else {
          pb.fail()
          if (error.response) {
            console.log(error?.response?.data)
          } else if (error.message) {
            console.log(error.message)
          } else {
            console.log(error)
          }
        }
      } finally {
        pb.finish()
      }
    }
  }
}
