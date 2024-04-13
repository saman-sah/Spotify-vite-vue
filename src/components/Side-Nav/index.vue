<script setup>
import MenuItem from './MenuItem.vue'
import { menuItems, playList } from '../../utils/data'
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
      <div class="py-3.5" />
      <template 
        v-for="pItem in playList"
        :key="pItem"
      >
        <MenuItem
          class="ml-[1px]"
          v-bind="pItem"
        />
      </template>
    </ul>
    <div class="border-b border-b-gray-700" />
    <ul>
      <li
        v-for="n in 5"
        :key="n"
        class="font-semibold trext-[13px] mt-3 text-gray-300 hover:text-white"
      >
        My Playlist #{{ n }}
      </li>
    </ul>
  </div>
</template>
