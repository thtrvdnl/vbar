import axios from 'axios'
import NProgress from 'nprogress'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    accept: 'application/json'
  }
})

instance.interceptors.request.use(config => {
  NProgress.start()
  return config
}, onError)

instance.interceptors.response.eject

instance.interceptors.response.use(response => {
  NProgress.done()
  return response
}, onError)

function onError(error) {
  document.querySelector('#nprogress .bar').style.background = 'red'
  NProgress.done()
  return Promise.reject(error)
}

export default instance
