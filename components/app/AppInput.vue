<script lang="ts" setup>
import type { IInput } from '@/types/app/input'

defineProps<IInput>()
</script>

<template>
  <label for="" class="input">
    <!-- <Icon :name="icon" size="24" class="input__icon" /> -->
    <input type="text" :placeholder="placeholder" :value="text" class="input__text" />
  </label>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/app/input.scss';
</style>
