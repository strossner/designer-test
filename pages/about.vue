<template>
  <div class="flex h-full w-full my-5">
    <div class="text-center mx-auto">
      <Headline
        ><h1 class="my-5">{{ $t('headlines.about') }}</h1></Headline
      >
      <ButtonsBack />
    </div>
  </div>
</template>

<script lang="ts" setup>
const emit = defineEmits(['title']);
const Lang = useI18n();
emit('title', Lang.t('headlines.aboutTitle'));
</script>

<style scoped></style>
