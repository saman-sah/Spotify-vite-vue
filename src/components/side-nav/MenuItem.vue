<script setup>
import { ref, toRefs, watchEffect } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const props = defineProps({
  iconString: {
    type: String,
    default: ''
  },
  iconSize: {
    type: Number,
    default: 19
  },
  pageUrl: {
    type: String,
    default: ''
  },
  name: {
    type: String,
    default: ''
  },
  to: {
    type: String,
    default: '/'
  }

})
const { iconSize, iconString, name, pageUrl } = toRefs(props)

const icon = ref(null)
const textIsHover = ref(false)

watchEffect(() => {
  if(route.path === pageUrl.value) {
    icon.value = iconString.value + '-active'
    textIsHover.value = true
  } else {
    icon.value = iconString.value + '-inactive'
    textIsHover.value = false
  }
})

const isHover = () => {
  if(icon.value === iconString.value + '-active') return

  if(icon.value === iconString.value + '-active') {
    icon.value = iconString.value + '-inactive-hover'
    textIsHover.value = true
  } else {
    icon.value = iconString.value + '-inactive'
    textIsHover.value = false
  }
}
</script>
<template>
  <li
    class="flex items-center justify-start pb-4 cursor-pointer"
    @mouseenter="isHover()"
    @mouseleave="isHover()"
  >
    <img 
      :src="`/images/icons/${icon}.png`" 
      alt=""
      :width="iconSize"
    >
    <div :class="[
      textIsHover ? 'text-white' : 'text-gray-400',
      'font-semibold text-[14px] ml-4 mt-0.5'
    ]">
      <span :class="route.path === pageUrl ? 'text-white' : ''">
        {{ name }}
      </span>
    </div>
  </li>
</template>
