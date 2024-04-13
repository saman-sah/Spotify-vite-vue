<script setup>
import CardItem from '../components/Home-View/CardItem.vue'

const items = [
  {
    image: 'https://picsum.photos/id/30/300/300',
    title: 'Title is here',
    subTitle: 'Subtitle is here'
  },
  {
    image: 'https://picsum.photos/id/45/300/300',
    title: 'Title is here',
    subTitle: 'Subtitle is here'
  },
  {
    image: 'https://picsum.photos/id/65/300/300',
    title: 'Title is here',
    subTitle: 'Subtitle is here',
    class: 'md:block hidden'
  },
  {
    image: 'https://picsum.photos/id/67/300/300',
    title: 'Title is here',
    subTitle: 'Subtitle is here',
    class: 'lg:block hidden'
  },
  {
    image: 'https://picsum.photos/id/100/300/300',
    title: 'Title is here',
    subTitle: 'Subtitle is here',
    class: 'lg:block hidden'
  },
]
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
    <div class="flex items-center">
      <CardItem
        v-for="item, index in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :subTitle="item.subTitle"
        :class="item.class"
      />
    </div>
  </div>

  <div class="p-8">
    <button
        type="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended radio
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <CardItem
        v-for="item, index in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :subTitle="item.subTitle"
        :class="item.class"
      />
    </div>
  </div>

  <div class="p-8">
    <button
        type="button"
        class="text-white text-2xl font-semibold hover:underline cursor-pointer"
    >
      Recommended songs
    </button>
    <div class="py-1.5"></div>
    <div class="flex items-center">
      <CardItem
        v-for="item, index in items"
        :key="index"
        :image="item.image"
        :title="item.title"
        :subTitle="item.subTitle"
        :class="item.class"
      />
    </div>
  </div>
</template>
