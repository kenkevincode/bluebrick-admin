async function get(url, params /* , cancelToken = undefined */) {
  const options = {
    method: 'GET',
    mode: 'cors'
  }

  console.log('-- get url:', url)

  const response = await fetch(url, params, options)

  console.log('-- get response:', response)

  const data = await response.json()

  console.log('-- data:', data)

  return data
}

async function post(url, bodyData /* , cancelToken = undefined */) {
  const headers = {}
  const body = serializeBody(headers, bodyData)

  const options = {
    method: 'POST',
    mode: 'cors',
    headers,
    body
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

async function put(url, bodyData /* , cancelToken = undefined */) {
  const headers = {}
  const body = serializeBody(headers, bodyData)

  const options = {
    method: 'PUT',
    mode: 'cors',
    // credentials: 'include',
    headers,
    body
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

async function del(url, bodyData /* , cancelToken = undefined */) {
  const headers = {}
  const body = serializeBody(headers, bodyData)

  const options = {
    method: 'DELETE',
    mode: 'cors',
    headers,
    body
  }

  const response = await fetch(url, options)
  const data = await response.json()
  return data
}

function isJson(obj) {
  return obj.constructor === Object || obj.constructor === Array
}

function serializeBody(headers, body) {
  if (!body) return null

  if (isJson(body)) {
    headers['Content-Type'] = 'application/json'
    return JSON.stringify(body)
  }

  headers['Content-Type'] = 'application/x-www-form-urlencoded'
  return body.toString()
}

export default {
  get,
  put,
  post,
  del
}
