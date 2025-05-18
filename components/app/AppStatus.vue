<script lang="ts" setup>
const props = defineProps<{
  status: boolean
}>()

const status = computed(() => {
  return props.status ? 'Active' : 'Inactive'
})
</script>

<template>
  <span :class="['status', `status-${props.status}`]">{{ status }}</span>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/app/status.scss';
</style>
