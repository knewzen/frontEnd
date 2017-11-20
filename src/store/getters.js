const getters = {
  sidebar: state => state.app.sidebar,
  token: state => state.user.token,
  avatar: state => state.user.avatar,
  name: state => state.user.name,
  roles: state => state.user.roles,
  articleList: state => state.blog.list.map(item => {
    return {
      ...item,
      tags: JSON.parse(item.tags)
    }
  }),
  activeBlog: state => state.blog.activeBlog
}
export default getters
