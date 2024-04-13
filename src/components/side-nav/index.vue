<script setup>
import MenuItem from './MenuItem.vue'
const menuItems = [
  {
    to: '/',
    iconSize: 23,
    name: 'Home',
    iconString: 'home',
    pageUrl: '/'
  },
  {
    to: '/search',
    iconSize: 23,
    name: 'Search',
    iconString: 'search',
    pageUrl: '/search'
  }
]
</script>
<template>
  <div
    id="SideNav"
    class="h-[100%] p-6 w-[240px] fixed z-50 bg-black"
  >
    <router-link to="/">
      <img 
        src="/images/icons/spotify-logo.png" 
        alt=""
        width="125"
      >
    </router-link>
    <div class="my-8" />
    <ul>
      <router-link
        v-for="item, index in menuItems"
        :key="index"
        :to="item.to"
      >
        <MenuItem
          class="ml-[1px]"
          v-bind="item"
        />
      </router-link>
    </ul>
  </div>
</template>
