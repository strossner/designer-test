<template>
  <ButtonsButton @click="back">{{ $t('buttons.back') }}</ButtonsButton>
</template>

<script lang="ts" setup>
import { Router } from 'vue-router';

const router: Router = useRouter();
const back = (): void => {
  router.back();
};
</script>

<style scoped></style>
