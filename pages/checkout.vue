<template>
  <form method="post" @submit.prevent="handlePurchase">
    <div class="max-w-screen-xl mx-auto my-5">
      <div class="relative flex flex-wrap gap-2 lg:gap-0">
        <div class="w-full order-1 lg:w-1/3">
          <Svg :color="color.color">
            <template #picture>
              <div class="absolute top-1/3 bottom-0 left-0 right-0">
                <NuxtImg v-if="motive.img" class="mx-auto w-20" :src="motive.img" />
              </div>
            </template>
          </Svg>
          <div class="block text-center">
            <p v-if="motive.name" class="font-bold">{{ $t('motive') }}: {{ motive.name }}</p>
            <p v-if="color.name" class="font-bold">{{ $t('color') }}: {{ color.name }}</p>
          </div>
        </div>
        <div class="flex lg:block m-auto w-full order-2 lg:w-1/3 max-lg:w-screen">
          <Card class="h-96 w-full lg:w-72 xl:w-96 mx-auto max-lg:m-5">
            <div class="m-5">
              <h2 class="text-2xl font-mono mb-5 mt-2">{{ $t('checkout.receipt') }}</h2>
              <div class="grid grid-cols-2 gap-2">
                <p>{{ $t('motive') }}:</p>
                <p class="text-right">{{ formatCurrency(motive.price) }}</p>
                <p>{{ $t('color') }}:</p>
                <p class="text-right">{{ formatCurrency(color.price) }}</p>
              </div>
              <div class="absolute bottom-5">
                <hr />
                <div class="grid grid-cols-2 gap-2 font-bold text-xl">
                  <p>{{ $t('checkout.total') }}</p>
                  <p class="text-right">{{ formatCurrency(motive.price + color.price) }}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
        <div class="flex m-auto order-3 lg:w-1/3 lg:space-y-5 max-lg:w-screen">
          <div class="w-full max-lg:m-5">
            <Card class="h-96 w-full lg:w-72 xl:w-96 mx-auto">
              <div class="m-5">
                <template v-if="error.general">
                  <p class="text-red-500 mb-5">{{ error.general }}</p>
                </template>
                <h2 class="font-mono text-2xl mb-5 mt-2">{{ $t('checkout.form.headline') }}</h2>

                <FormsInput
                  input-name="name"
                  max="15"
                  required
                  :placeholder="$t('checkout.form.placeholder.name')"
                  @value="(event) => (inputValues.name = event)"
                >
                  <template #label>{{ $t('checkout.form.name') }}</template>
                  <template #error>
                    <sub v-if="error.name" class="text-red-500">{{ error.name }}</sub>
                  </template>
                </FormsInput>
                <FormsInput
                  input-name="address"
                  required
                  :placeholder="$t('checkout.form.placeholder.address')"
                  @value="(event) => (inputValues.address = event)"
                >
                  <template #label>{{ $t('checkout.form.address') }}</template>
                  <template #error>
                    <sub v-if="error.address" class="text-red-500">{{ error.address }}</sub>
                  </template>
                </FormsInput>
              </div>
            </Card>
          </div>
        </div>
        <div class="flex order-4 basis-full w-full justify-end m-5 text-right">
          <ButtonsButton color="green" submit>{{ $t('buttons.buy') }}</ButtonsButton>
        </div>
      </div>
    </div>
  </form>
</template>

<script lang="ts" setup>
import { useDesignerStore } from '~/stores/designer.store';
import { formatCurrency } from '~/composables/currency';
const Lang = useI18n();
const emit = defineEmits(['title']);
const DesignerStore = useDesignerStore();
const color = computed(() => DesignerStore.color);
const motive = computed(() => DesignerStore.motive);
emit('title', Lang.t('headlines.checkout'));

const error = ref({
  general: '',
  name: '',
  address: '',
});
const inputValues = reactive({
  name: '',
  address: '',
});
/* handle user input and send it to the server */
const handlePurchase = async () => {
  const { data, error: e } = await useFetch('/api/order', {
    method: 'POST',
    body: inputValues,
  });

  if (data && data.value?.success) {
    await useRouter().push({ name: 'order-success' });
  }
  if (e && e.value) {
    error.value.general = e.value.data.message;
  }
  if (e && e.value?.data.errors) {
    error.value.name = e.value.data.errors.name ? e.value.data.errors.name[0] : undefined;
    error.value.address = e.value.data.errors.address ? e.value.data.errors.address[0] : undefined;
  }
};
</script>

<style></style>
