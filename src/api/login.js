import fetch from '@/utils/fetch'
import md5 from 'md5'

export function login(username, password) {
  return fetch({
    url: '/users/login',
    method: 'post',
    data: {
      username,
      password: md5(password)
    }
  })
}

export function getInfo(token) {
  return fetch({
    url: '/user/info',
    method: 'get',
    params: { token }
  })
}

export function logout() {
  return fetch({
    url: '/user/logout',
    method: 'post'
  })
}
