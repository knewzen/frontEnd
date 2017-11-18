import {
  getBlogList,
  createBlog
} from '@/api/blog'

const blog = {
  state: {
    list: []
  },
  mutations: {
    'SET_LIST': (state, newList) => {
      state.list = newList
    }
  },
  actions: {
    CreateArticle ({ commit }, { title, tags, content }) {
      return new Promise((resolve, reject) => {
        createBlog({
          title: title.trim(),
          tags,
          content: JSON.stringify(content)
        }).then(res => {
          resolve(res)
        })
      })
    },
    GetArticleList ({commit}, id) {
      return new Promise((resolve, reject) => {
        getBlogList({
          id
        }).then(res => {
          commit('SET_LIST', res.data.list)
          resolve(res)
        })
      })
    }
  }
}

export default blog