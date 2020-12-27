export default async function(action, errHandler) {
  try {
    return await action()
  } catch (error) {
    if (errHandler) {
      errHandler()
    } else {
      if (error.response) {
        console.log(error?.response?.data)
      } else if (error.message) {
        console.log(error.message)
      } else {
        console.log(error)
      }
    }
  }
}
