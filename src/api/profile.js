import { addJwt } from '@/utils'

export default function(instance) {
  return {
    updateData(accessToken, payload) {
      addJwt(instance, accessToken)
      return instance.put(`/api/profile/${payload.id}/`, payload)
    }
  }
}
