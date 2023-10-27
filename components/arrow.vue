<template>
  <div
    class="h-0 w-0 lg:h-5 lg:w-14 max-lg:border-y-8 max-lg:border-y-transparent lg:border-x-[32px] lg:border-x-transparent hover:cursor-pointer"
    :class="[
      { 'max-lg:border-r-[16px] max-lg:border-r-green-500 lg:border-b-[32px] lg:border-b-green-500': backward },
      { 'max-lg:border-l-[16px] max-lg:border-l-green-500 lg:border-t-[32px] lg:border-t-green-500': forward },
    ]"
  />
</template>

<script lang="ts" setup>
defineProps({
  backward: Boolean,
  forward: Boolean,
});
</script>

<style scoped></style>
