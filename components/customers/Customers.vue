<script lang="ts" setup>
const storeCustomers = useCustomersStore()
const users = computed(() => storeCustomers.user)

const TABLE_HEAD: string[] = [
  'Customer Name',
  'Company',
  'Phone Number',
  'Email',
  'Country',
  'Status'
]

onMounted(() => {
  storeCustomers.getCustomers()
})
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
