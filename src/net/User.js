import net from './net'
import config from '@/config'

class User {
  getAll () {
    return net.get(`${config.api}/users`)
  }

  create (user) {
    return net.put(`${config.api}/users`, user)
  }

  update (id, user) {
    return net.post(`${config.api}/users/${id}`, user)
  }

  remove (ids) {
    return net.del(`${config.api}/users`, ids)
  }
}
export default User
