export default {
  AUTH_STATUS: ({ isAuthorized }) => isAuthorized,
  USER_ID: state => state.user.id
}
