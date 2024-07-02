import { defineStore } from 'pinia'

export const tokenStore = defineStore('token', {
  state: () => ({
    token: localStorage.getItem('accessToken') || ''
  }),
  getters: {
    isAuthenticated() {
      return this.token !== ''
    }
  },
  actions: {
    setToken(token) {
      this.token = token
      localStorage.setItem('accessToken', token)
    },
    clearToken() {
      this.token = null
      localStorage.removeItem('accessToken')
    },
  }
})
