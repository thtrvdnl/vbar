import axios from 'axios'

export default async (jwtToken, urlPath) => {
  const response = axios.get(`http://localhost:8000/${urlPath}`, {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization: `JWT ${jwtToken}`
    }
  })
  return response
}
