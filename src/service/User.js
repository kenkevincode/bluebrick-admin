import net from '@/net'

export default class User {
	loadAll() {
		return net.user.getAll().then((users) => users.map(fromTransportUser))
	}

	create(user) {
		return net.user.create(user).then((response) => response.text())
	}

	update(id, user) {
		return net.user.update(id, user)
	}

	remove(ids) {
		const idsData = ids.join(',')

		console.log('service.user.remove:')
		console.log('ids:', ids)
		console.log('idsData:', idsData)

		return net.user.remove(idsData)
	}
}

/* function toTransportUser (user) {
  return {
    ...user,
    createdDate: user.createdDate.toISOString()
  }
} */

function fromTransportUser(user) {
	return {
		...user,
		createdDate: new Date(user.createdDate)
	}
}
