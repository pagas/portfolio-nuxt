<script lang="ts" setup>
const {to, href} = defineProps({
    to: {
      type: String,
      default: null
    },
    href: {
      type: String,
      default: null
    }
})

</script>

<template>
  <component
      :is="to ? 'nuxt-link' : href ? 'a' : 'button'"
      :to="to"
      :href="href"
      class="
        text-gray-800
        hover:bg-gray-700 hover:text-white
        border
        border-gray-800
        focus:ring-4
        focus:outline-none
        focus:ring-gray-800
        font-medium
        rounded-lg
        text-sm px-5 py-2
        text-center

        dark:border-white
        dark:text-white
        dark:hover:text-white
        dark:hover:bg-gray-700
        dark:focus:ring-gray-700"

  >
    <slot></slot>
  </component>
</template>

<style scoped>

</style>