import { defineStore } from 'pinia'
import type { IAuth } from '../types/auth'

export const useAuthStore = defineStore('auth', {
  state: (): IAuth => ({
    login: {
      email: '',
      password: ''
    },
    form: {
      email: '',
      password: ''
    },
    status: false
  }),
  actions: {
    async registerUser(email: string, password: string) {},

    async loginUser(email: string, password: string) {
      this.login.email = email
      this.login.password = password
    }
  }
})

export const usIsLoadingStore = defineStore('isLoading', {
  state: () => ({
    isLoading: true
  }),
  actions: {
    set(date: boolean) {
      this.$patch({
        isLoading: date
      })
    }
  }
})
