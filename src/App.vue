<script setup>
import { ref } from 'vue'
import { 
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  ChevronUp
 } from './utils/icons'

 import SideNav from './components/side-nav/index.vue'

 const openMenu = ref(false)
</script>

<template>
  <div>
    <div class="w-[calc(100%-240px)] h-[60px] fixed right-0 z-20 bg-[#101010] bg-opacity-80 flex items-center justify-between">
      <div class="flex items-center ml-6">
        <button 
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronLeft 
            fillColor="#FFFFFF" 
            :size="30"
          />
        </button>
        <button 
          type="button"
          class="rounded-full bg-black p-[1px] cursor-pointer"
        >
          <ChevronRight
            fillColor="#FFFFFF" 
            :size="30"
          />
        </button>
      </div>
      <button 
        @click="openMenu = !openMenu"
        :class="[
          openMenu ? 'bg-[#282828]' : 'bg-black',
          'rounded-full bg-black hover:bg-[#282828] p-0.5 mr-8 mt-0.5 cursor-pointer'
        ]"
      >
        <div class="flex items-center">
          <img 
            src="https://yt3.ggpht.com/yti/ANjgQV_g-MfLqiBpH783dHBeMXG9FBq-KArO9p4TgCLBSzlkSQ=s88-c-k-c0x00ffffff-no-rj" 
            alt="user avatar"
            width="27"
            class="rounded-full"
          >
          <div class="text-white text-[14px] ml-1.5 font-semibold">
            Saman Sahraei
          </div>
          <ChevronDown
            v-if="!openMenu"
            @click="openMenu = true"
            fillColor="#FFFFFF"
            :size="25"
          />
          <ChevronUp
            v-else
            @click="openMenu = false"
            fillColor="#FFFFFF"
            :size="25"
          />
        </div>
      </button>

      <span
        v-if="openMenu"
        class="fixed w-[190px] bg-[#282828] shadow-2xl z-50 rounded-sm top-[52px] right-[35px] p-1 cursor-pointer"
      >
        <ul class="text-gray-200 font-semibold text-[14px]">
          <li class="Ppx-3 py-2.5 hover:bg-[#3E3D3D] border-b border-b-gray-600">
            Profile            
          </li>
          <li class="Ppx-3 py-2.5 hover:bg-[#3E3D3D]">
            Log out            
          </li>
        </ul>
      </span>
    </div>
    <SideNav />
  </div>
  <div class="fixed right-0 top-0 w-[calc(100%-240px)] overflow-auto h-full bg-gradient-to-b from-[#1C1C1C] to-black">
    <div class="mt-[70px]" />
      <router-view></router-view>
    <div class="mb-[100px]" />
    </div>
</template>

