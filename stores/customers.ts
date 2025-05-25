import { defineStore } from 'pinia'
import type { ICustomer, IUser } from '../types/customers'

export const useCustomersStore = defineStore('customers', {
  state: (): ICustomer => ({
    user: [],
    pagination: {
      last: 0,
      next: 0,
      total: 0,
      page: 0
    }
  }),
  actions: {
    async getCustomers() {
      const { data, error } = await useCustomFetch('/users')
      this.user = data.value.users.map(user => ({
        userName: user.firstName,
        company: user.company.name,
        phone: user.phone,
        email: user.email,
        country: user.address.country,
        status: true
      }))
    }
  }
})
