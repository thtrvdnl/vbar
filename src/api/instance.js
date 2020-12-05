import axios from 'axios'

export default axios.create(jwtToken => {
  const axiosConfig = {
    baseURL: 'http://localhost:8000/',
    headers: {
      accept: 'application/json'
    }
  }

  if (jwtToken) {
    axiosConfig.headers['Authorization'] = `JWT ${jwtToken}`
  }

  return axiosConfig
})
