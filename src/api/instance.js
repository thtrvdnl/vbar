import axios from 'axios'

const instance = axios.create({
  baseURL: 'http://localhost:8000/',
  headers: {
    accept: 'application/json'
  }
})

export default instance
