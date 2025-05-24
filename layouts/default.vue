<script lang="ts" setup>
console.log('loaded')
</script>

<template>
  <section class="layout">
    <LayoutSidebar />
    <!-- layout__wrapper -->
    <div class="container layout__wrapper">
      <slot class="layout__slot" />
    </div>
  </section>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layouts/default.scss';
</style>
