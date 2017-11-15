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

export function getInfo() {
  return fetch({
    url: '/users/info',
    method: 'get'
  })
}

export function logout() {
  return fetch({
    url: '/users/logout',
    method: 'post'
  })
}
