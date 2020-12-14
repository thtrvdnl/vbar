import axios from 'axios'

export const updateProfile = (jwtToken, id, payload) =>
  axios.put(
    `http://localhost:8000/api/profile/${id}`,
    {
      method: 'PUT',
      headers: {
        accept: 'application/json',
        Authorization: `JWT ${jwtToken}`
      }
    },
    payload
  )
