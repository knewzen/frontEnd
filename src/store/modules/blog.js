import {
  getBlogList,
  createBlog,
  updateBlog
} from '@/api/blog'

import {
  formatTime
} from '@/utils'

const blog = {
  state: {
    list: [],
    activeBlog: {
      /**
       * id: 0,
       * title: '',
       * tags: [],
       * content: ''
       */
    }
  },
  mutations: {
    'SET_LIST': (state, newList) => {
      state.list = newList
    },
    'SET_ACTIVEBLOG': (state, blogData) => {
      state.activeBlog = blogData
    },
    'RESET_ACTIVEBLOG': (state) => {
      state.activeBlog = {}
    }
  },
  actions: {
    CreateArticle ({ commit }, { title, tags, content }) {
      return new Promise((resolve, reject) => {
        createBlog({
          title: title.trim(),
          tags,
          content: content,
          editTime: formatTime(new Date())
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
    },
    UpdateArticle ({ commit }, {
      id,
      title,
      tags,
      content
    }) {
      return new Promise((resolve, reject) => {
        updateBlog({
          id,
          title,
          tags: JSON.stringify(tags),
          content,
          editTime: formatTime(new Date())
        }).then(res => {
          debugger
        })
      })
    }
  }
}

export default blog