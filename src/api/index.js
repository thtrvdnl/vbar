import instance from './instance'
import authModule from './auth'
import profileModule from './profile'

export default {
  auth: authModule(instance),
  profile: profileModule(instance)
}
