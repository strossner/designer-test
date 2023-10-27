<template>
  <NuxtLayout />
</template>

<script lang="ts" setup>
import { useGlobalStore } from '~/stores/global.store';
import { useAsyncData } from '#app';

const GlobalStore = useGlobalStore();

const { data: colors } = await useAsyncData('colors', () => $fetch('/api/colors'));
const { data: motives } = await useAsyncData('motives', () => $fetch('/api/motives'));

useGlobalStore().setColors(colors);
useGlobalStore().setMotives(motives);
</script>

<style scoped></style>
