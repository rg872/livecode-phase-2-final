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
    },
    setNewBook (state, book) {
      state.books.push(book)
    },
    deleteBook (state, book) {
      let index = state.books.indexOf(book)
      state.books.splice(index, 1)
    }
  },
  actions: {
    signIn ({ commit }, user) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/users/signin', user)
          .then(res => {
            localStorage.setItem('token', res.headers.token)
            localStorage.setItem('id', res.data.id)
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
            localStorage.setItem('id', res.data.id)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },
    getAllBooks ({ commit }) {
      return new Promise((resolve, reject) => {
        axios.get('http://localhost:3000/books', {
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(res => {
            commit('setAllBooks', res.data.books)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    createBook ({ commit }, book) {
      return new Promise((resolve, reject) => {
        axios.post('http://localhost:3000/books', book, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(res => {
            commit('setNewBook', res.data.book)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    },

    deleteBook ({ commit }, book) {
      return new Promise((resolve, reject) => {
        axios.delete(`http://localhost:3000/books/${book._id}`, {
          headers: {
            token: localStorage.getItem('token')
          }
        })
          .then(res => {
            commit('deleteBook', book)
            resolve()
          })
          .catch(err => {
            reject(err)
          })
      })
    }
  }
})
