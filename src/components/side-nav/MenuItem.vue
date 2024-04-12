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
  }

})

const { iconSize, iconString, name, pageUrl } = toRefs(props)

const icon = ref(null)
const textIsHover = ref(false)
</script>
<template>
  <div
    id="MenuItem"
    class=""
  >
    
  </div>
</template>
