<template>
  <div class="mb-3">
    <label class="block text-gray-700 text-sm font-bold mb-2" :for="inputName">
      <slot name="label" />
    </label>
    <input
      :id="inputName"
      v-model="input"
      class="shadow appearance-none border border-red-500 rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
      :type="type"
      :min="min"
      :max="max"
      :placeholder="placeholder"
      :required="required"
    />
    <slot name="error" />
  </div>
</template>

<script lang="ts" setup>
import { debounce } from 'lodash-es';

defineProps({
  type: {
    type: String,
    default: 'textbox',
  },
  placeholder: String,
  min: String,
  max: String,
  inputName: String,
  required: Boolean,
});
const input = ref();
const emit = defineEmits(['value']);
watch(
  input,
  debounce((value) => {
    emit('value', value);
  }, 500),
);
</script>

<style></style>
