<template>
  <div class="h-screen">
    <div class="container lg:h-screen mx-auto">
      <div class="flex h-full">
        <div class="w-full m-auto py-32">
          <NuxtPage :page-key="(route) => route.fullPath" @title="handleHeadline" />
        </div>
      </div>
    </div>
    <div class="fixed top-0 w-full">
      <Header>
        <template #left-side>
          <Headline class="flex text-green-500">{{ headline }}</Headline>
        </template>
        <template #right-side>
          <ButtonsBack />
        </template>
      </Header>
    </div>
    <div class="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
</template>

<script lang="ts" setup>
const headline = ref('');
/* get current headline from emit */
const handleHeadline = (value: string) => {
  headline.value = value;
};
</script>
