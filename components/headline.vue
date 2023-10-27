<template>
  <span class="my-auto text-2xl lg:text-4xl">
    <slot />
  </span>
</template>

<script lang="ts" setup>
defineProps({
  color: {
    default: 'black',
    type: String,
  },
  weight: String,
});
</script>

<style></style>
