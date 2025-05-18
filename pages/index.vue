<script lang="ts" setup>
const user = 'Alex'
</script>

<template>
  <div class="home">
    <h1 class="title title--subtitle">Hello {{ user }} 👋🏼</h1>
    <AppStatus :status="true" />
  </div>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/home.scss';
</style>
