import JwtDecode from 'jwt-decode'

export default class User {
  static from (token) {
    try {
      let obj = JwtDecode(token)
      console.log(obj); // eslint-disable-line no-console
      return new User(obj)
    } catch (_) {
      return null
    }
  }

  constructor ({ user_id, admin, email }) {
    this.id = user_id // eslint-disable-line camelcase
    this.admin = admin
    this.email = email
  }

  get isAdmin () {
    return this.admin
  }
}