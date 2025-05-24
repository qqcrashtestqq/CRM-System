<script lang="ts" setup>
// data users
const email = ref<string>('')
const password = ref<string>('')
</script>

<template>
  <div class="login">
    <button class="title title--subtitle login__title">Login</button>
    <button class="title title--subtitle login__title">Register</button>
    <form class="login__form">
      <AppInput v-model="email" text="" placeholder="Email" class="login__input" />
      <AppInput v-model="password" text="" placeholder="Password" class="login__input" />
      <AppButton text="Login" />
    </form>
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/login.scss';
</style>
