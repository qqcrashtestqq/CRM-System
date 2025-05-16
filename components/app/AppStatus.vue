<script lang="ts" setup>
defineProps<{
  text: string;
}>();
</script>

<template>
  <span class="status">{{ text }}</span>
</template>

<style lang="scss" scoped>
@use "@/assets/scss/app/status.scss";
</style>
