import axios from 'axios'

export default async jwtToken =>
  axios.get('http://localhost:8000/auth/users/me/', {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `JWT ${jwtToken}`
    }
  })
