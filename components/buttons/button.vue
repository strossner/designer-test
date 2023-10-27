<template>
  <button
    class="py-3 px-5 my-auto min-w-[10rem] h-14 bg-blue-500 rounded-xl"
    :class="[{ 'bg-blue-500': !color }, { 'bg-green-500': color === 'green' }]"
    :submit="submit"
  >
    <slot />
  </button>
</template>

<script lang="ts" setup>
defineProps({
  color: String,
  submit: Boolean,
});
</script>

<style></style>
