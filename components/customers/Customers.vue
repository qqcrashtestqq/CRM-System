<script lang="ts" setup>
interface IUsers {
  userName: string
  company: string
  phone: string
  email: string
  country: string
  status: boolean
}

const TABLE_HEAD: string[] = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status'
]

const users: IUsers[] = [
  {
    userName: 'Alex',
    company: 'Google',
    phone: '123',
    email: '3kHtH@example.com',
    country: 'USA',
    status: true
  },
  {
    userName: 'Alex',
    company: '',
    phone: '+38 (098) 291 04 34',
    email: '3kHtH@example.com',
    country: 'USA',
    status: false
  },
  {
    userName: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: true
  },
  {
    userName: 'Alex',
    company: 'Google',
    phone: '123',
    email: '3kHtH@example.com',
    country: 'USA',
    status: true
  },
  {
    userName: 'Alex',
    company: '',
    phone: '123',
    email: '3kHtH@example.com',
    country: 'USA',
    status: false
  },
  {
    userName: 'Jane Cooper',
    company: 'Microsoft',
    phone: '(225) 555-0118',
    email: 'jane@microsoft.com',
    country: 'United States',
    status: true
  },
  {
    userName: 'Alex',
    company: 'Google',
    phone: '123',
    email: '3kHtH@example.com',
    country: 'USA',
    status: true
  },
  {
    userName: 'Alex',
    company: '',
    phone: '123',
    email: '3kHtH@example.com',
    country: 'USA',
    status: false
  }
]
</script>

<template>
  <div class="customers">
    <div class="customers__head">
      <div class="customers__info">
        <h2 class="title customers__title">All Customers</h2>
        <p class="customers__subtitle">Active Members</p>
      </div>
      <AppInput placeholder="Search" />
    </div>
    <table class="customers__table">
      <thead class="customers__thead">
        <tr class="customers__tr">
          <td v-for="(item, index) in TABLE_HEAD" :key="index">
            {{ item }}
          </td>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(item, index) in users" :key="index" class="customers__users">
          <td>{{ item.userName || '-' }}</td>
          <td>{{ item.company || '-' }}</td>
          <td>{{ item.phone || '-' }}</td>
          <td>{{ item.email || '-' }}</td>
          <td>{{ item.country || '-' }}</td>
          <td><AppStatus :status="item.status" /></td>
        </tr>
      </tbody>
    </table>
    <div class="customers__pagination">
      <p class="customers__text">Showing data {{ 1 }} to {{ 10 }} of 256K entries</p>
      <AppPagination />
    </div>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/customers.scss';
</style>
