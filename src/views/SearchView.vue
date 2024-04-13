<script setup>
import CategorySelect from '../components/Search-View/CategorySelect.vue'
import { categoryItems } from '../utils/data'

</script>
<template>
  <div class="p-8">
    <button
      type="button"
      class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Podcasts to make you smarter
    </button>
    <div class="py-1.5" />
    <div class="grid grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 gap-6">
      <CategorySelect
        v-for="item, index in categoryItems"
        :key="index"
        :image="item.image"
        :category="item.category"
      />
    </div>
  </div>

</template>
