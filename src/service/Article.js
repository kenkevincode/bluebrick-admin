import net from '@/net'

export default class Article {
	loadAll() {
		return net.article.getAll()
	}

	create(article) {
		return net.article.create(article).then((response) => response.text())
	}

	update(id, article) {
		return net.article.update(id, article)
	}

	remove(id) {
		return net.article.remove(id)
	}
}
