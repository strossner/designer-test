<template>
  <nav class="h-28 w-full bg-blue-100">
    <div class="flex max-w-screen-xl h-full mx-2 xl:m-auto">
      <div class="flex h-full">
        <slot name="left-side" />
      </div>
      <div class="flex flex-1 justify-end">
        <slot name="right-side" />
      </div>
    </div>
  </nav>
</template>

<script lang="ts" setup></script>

<style scoped></style>
