<script lang="ts" setup>
// const { data: posts } = await useAsyncData('posts', () =>
//   queryContent('/blog').find()
// )

import { getPosts } from "./../../api/post";
const posts = await getPosts({});

</script>

<template>
  <h1 class="text-3xl my-8">Blog Posts</h1>

  I like to write about anything that I am currently working or something new that interests me.

  <section class="grid md:grid-cols-3 mt-8 gap-10">
    <Post :posts="posts" />
  </section>
</template>