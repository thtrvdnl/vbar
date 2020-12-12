import axios from 'axios'

const instance = {
  baseURL: 'http://localhost:8000/',
  headers: {
    accept: 'application/json'
  }
}

export default axios.create(instance)
