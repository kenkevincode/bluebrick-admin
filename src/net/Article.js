import net from './net'
import config from '@/config'

class Article {
  getAll () {
    return net.get(`${config.api}/articles`)
  }

  create (article) {
    return net.post(`${config.api}/articles`, article)
  }

  update (id, article) {
    return net.put(`${config.api}/articles/${id}`, article)
  }

  remove (id) {
    return net.del(`${config.api}/articles/${id}`)
  }
}
export default Article
