import net from './net'
import config from '@/config'

class Article {
  getAll () {
    return net.get(`${config.api}/articles`)
  }

  create (article) {
    return net.put(`${config.api}/articles`, article)
  }

  update (id, article) {
    return net.post(`${config.api}/articles/${id}`, article)
  }

  remove (ids) {
    return net.del(`${config.api}/articles`, ids)
  }
}
export default Article
