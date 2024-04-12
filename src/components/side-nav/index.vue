<script setup>
import MenuItem from './MenuItem.vue'
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
      <router-link to="/">
        <MenuItem />
      </router-link>
    </ul>
  </div>
</template>
