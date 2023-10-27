<template>
  <footer class="h-28 bg-blue-100 w-full">
    <div class="flex max-w-screen-xl mx-2 xl:m-auto h-full">
      <NuxtLink class="my-auto" :to="{ path: 'about' }">{{ $t('buttons.about') }}</NuxtLink>
    </div>
  </footer>
</template>

<script lang="ts" setup></script>

<style scoped></style>
