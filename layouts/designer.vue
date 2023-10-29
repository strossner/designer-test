<template>
  <div>
    <div class="container md:h-screen mx-auto py-32">
      <NuxtPage :page-key="(route) => route.fullPath" />
    </div>
    <div class="fixed top-0 w-full">
      <Header>
        <template #left-side>
          <Headline class="text-green-500 flex">{{ $t('headlines.index') }}</Headline>
        </template>
        <template #right-side>
          <p class="my-auto px-5 text-2xl font-bold">
            {{ calculatedPrice }}
          </p>

          <ButtonsButton @click="$router.push({ path: 'checkout' })">{{ $t('buttons.checkout') }}</ButtonsButton>
        </template>
      </Header>
    </div>
    <div class="fixed bottom-0 w-full">
      <Footer />
    </div>
  </div>
</template>
<script lang="ts" setup>
import { useDesignerStore } from '~/stores/designer.store';
import { formatCurrency } from '~/composables/currency';

const DesignerStore = useDesignerStore();
const calculatedPrice = computed(() => {
  return formatCurrency(DesignerStore.color.price + DesignerStore.motive.price);
});
</script>
