<script lang="ts" setup>
interface IButton {
  icon?: string
  text: string
}

const props = defineProps<IButton>()

function click() {
  console.log('click')
}
</script>

<template>
  <button class="button" @click="click">
    {{ props.icon }}
    {{ props.text }}
  </button>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/app/button.scss';
</style>
