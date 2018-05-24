import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    books: []
  },
  mutations: {
    setAllBooks (state, books) {
      state.books = books
    }
  },
  actions: {
    signIn ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/signin', user)
          .then(res => {
            localStorage.setItem('token', res.headers.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    signUp ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/signup', user)
          .then(res => {
            localStorage.setItem('token', res.headers.token)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  },

  getAllBooks ({ commit }) {
    return new Promise((resolve, reject) => {
      axios.get('http://localhost:3000/books')
        .then(res => {
          commit('setAllBooks', res.data.books)
          resolve()
        })
        .catch(err => {
          reject(err)
        })
    })
  }
})
