<script lang="ts" setup>
import type { IMenuList } from '@/types/menu'

const MENU_LIST: IMenuList[] = [
  {
    text: 'home',
    link: '/',
    icon: 'KeyIcon'
  },
  {
    text: 'Product',
    link: '/product',
    icon: 'ProductIcon'
    // arrow: 'ArrowIcon'
  },
  {
    text: 'Customers',
    link: '/customers',
    icon: 'CustomerIcon'
    // arrow: 'ArrowIcon'
  },
  {
    text: 'Income',
    link: '/income',
    icon: 'IncomeIcon'
    // arrow: 'ArrowIcon'
  },
  {
    text: 'Promote',
    link: '/promote',
    icon: 'PromoteIcon'
    // arrow: 'ArrowIcon'
  },
  {
    text: 'Help',
    link: '/help',
    icon: 'HelpIcon'
    // arrow: 'ArrowIcon'
  }
]
</script>

<template>
  <aside class="aside">
    <NuxtLink to="/" class="aside__logo">
      <NuxtImg src="/images/logo.png" alt="logo product" />
    </NuxtLink>
    <nav class="aside__nav">
      <ul class="aside__list">
        <li v-for="(item, index) in MENU_LIST" :key="index" class="aside__item">
          <NuxtLink :to="item.link" class="aside__link">
            <span class="aside__span">
              <Icon :name="item.icon" size="24" />
              {{ item.text }}
            </span>
            <!-- <Icon :name="item.arrow" size="16" /> -->
          </NuxtLink>
        </li>
      </ul>
    </nav>

    <NuxtLink to="/profile" class="aside__profile">
      <div class="aside__avatar">
        <NuxtImg src="/images/user.png" alt="user avatar" />
      </div>
      <div class="aside__info">
        <p class="aside__info-name">Evano</p>
        <p class="aside__info-job">Project Manager</p>
      </div>
    </NuxtLink>
  </aside>
</template>

<style lang="scss" scoped>
@use '@/assets/scss/layouts/aside.scss';
</style>
