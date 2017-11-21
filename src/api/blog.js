import fetch from '@/utils/fetch'

export function getBlogList(params) {
  return fetch({
    url: '/blog/list',
    method: 'get',
    params
  })
}

export function createBlog(data) {
  return fetch({
    url: '/blog/create',
    method: 'post',
    data: data
  })
}

export function updateBlog(data) {
  return fetch({
    url: '/blog/update',
    method: 'post',
    data: data
  })
}
