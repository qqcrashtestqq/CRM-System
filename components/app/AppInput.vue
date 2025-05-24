<script lang="ts" setup>
import type { IInput } from '@/types/app/input'

const model = defineModel<string>('')

defineProps<IInput>()
</script>

<template>
  <label for="" class="input">
    <input v-model="model" type="text" :placeholder="placeholder" class="input__text" />
  </label>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/app/input.scss';
</style>
