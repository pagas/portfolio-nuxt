<script lang="ts" setup>
const props = defineProps(['posts'])
</script>

<template>
  <div v-for="post in props.posts" :key="post.slug"
    class="flex flex-col bg-white rounded-lg shadow-md overflow-hidden hover:opacity-75">
    <NuxtLink :to="post._path">
      <!-- <img :src="`/images/blog/${post.cover}`" alt="Blog Post Cover Image" class="w-full h-48 object-cover"> -->
      <img :src="post.image" alt="Blog Post Cover Image" class="w-full h-48 object-cover">
    </NuxtLink>
    <div class="px-6 pt-6 flex-auto">
      <h2 class="text-xl font-bold mb-2">{{ post.title }}</h2>
      <p class="text-gray-700 mb-4">{{ post.description }}</p>
    </div>
    <div class="p-6">
      <NuxtLink :to="post._path"
                class="inline-block bg-blue-500 hover:bg-blue-700 text-white py-2 px-4 rounded">Read More
      </NuxtLink>
    </div>
  </div>
</template>