<template>
  <div class="text-center">
    <Headline
      ><h1 class="my-5">{{ $t('headlines.order') }}</h1></Headline
    >
    <ButtonsButton @click="handleReset">{{ $t('buttons.new') }}</ButtonsButton>
  </div>
</template>

<script lang="ts" setup>
import { useDesignerStore } from '~/stores/designer.store';
import { useRouter } from '#app';
const Lang = useI18n();
const DesignerStore = useDesignerStore();
const Router = useRouter();
const emit = defineEmits(['title']);
emit('title', Lang.t('headlines.success'));
/* reset state values */
const handleReset = () => {
  DesignerStore.reset();
  Router.push({ name: 'index' });
};
</script>

<style></style>
