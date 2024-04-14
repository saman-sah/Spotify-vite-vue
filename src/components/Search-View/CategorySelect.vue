
<script setup>
import { ref, toRefs } from 'vue'
import uniqolor from 'uniqolor';

const randomColor = ref('')
randomColor.value = uniqolor.random()
const props = defineProps({
  category: {
    type: String,
    default: ''
  },
  image: {
    type: String,
    default: ''
  }
})

const { category } = toRefs(props)
</script>
<template>
  <router-link to="library">
    <div
      v-if="randomColor.color"
      :style="`background-color: ${randomColor.color};`"
      class="contrast-[2]  brightness-[0.87]  rounded-xl  aspect-square  relative  overflow-hidden"
    >
      <div class="text-white pt-3 pl-4 font-semibold text-[23px]">{{ category }}</div>
      <img
        class="absolute contrast-[0.55] -right-3.5 bottom-0 max-w-[100px] rotate-[20deg]"
        :src="image || ''"
      >
    </div>
  </router-link>
</template>
