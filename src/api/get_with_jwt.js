import instance from '@/api/instance'

export default async (jwtToken, urlPath) => {
  instance.defaults.headers.common['Authorization'] = `JWT ${jwtToken}`
  return instance.get(urlPath)
}
