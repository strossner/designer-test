<template>
  <div class="flex flex-wrap h-full gap-5 md:gap-0">
    <div class="flex md:block m-auto w-full order-2 md:w-1/3">
      <Card class="flex md:block h-full py-5 lg:w-60 lg:h-1/2">
        <Arrow class="m-auto lg:py-2" backward @click="selectPrevious('motive')" />
        <div
          v-for="motive in motives.slice(currentIndex.motive.current, currentIndex.motive.last)"
          :key="motive.name"
          class="flex m-3"
        >
          <NuxtImg
            class="m-auto hover:cursor-pointer rounded-lg h-20"
            :class="[{ 'outline outline-offset-2': selectedItem.motive.name === motive.name }]"
            :src="motive.img"
            @click="selectMotive(motive)"
          />
        </div>
        <Arrow class="m-auto lg:py-2" forward @click="selectNext('motive')" />
      </Card>
    </div>
    <div class="w-full m-auto order-1 md:order-2 md:w-1/3">
      <Svg class="w-full h-full" :color="selectedItem.color.color" :picture="selectedItem.motive.img">
        <template #picture>
          <div class="absolute top-1/3 bottom-0 left-0 right-0">
            <NuxtImg v-if="selectedItem.motive.img" class="mx-auto w-20" :src="selectedItem.motive.img" />
          </div>
        </template>
      </Svg>
    </div>
    <div class="flex md:block w-full m-auto order-3 md:order-3 md:w-1/3 md:space-y-5">
      <Card class="flex md:block h-full py-5 lg:w-60 lg:h-1/2">
        <Arrow class="m-auto lg:py-2" backward @click="selectPrevious('color')" />
        <div
          v-for="color in colors.slice(currentIndex.color.current, currentIndex.color.last)"
          :key="color.name"
          class="inline-flex h-full md:h-0 md:w-full mx-2 md:mx-0 md:my-2"
        >
          <span
            class="m-auto w-20 h-20 rounded-full hover:cursor-pointer"
            :class="[{ 'outline outline-offset-2': selectedItem.color.name === color.name }]"
            :style="[{ background: color.color }]"
            @click="selectColor(color)"
          ></span>
        </div>
        <Arrow class="m-auto lg:py-2" forward @click="selectNext('color')" />
      </Card>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useDesignerStore } from '~/stores/designer.store';
import { useGlobalStore } from '~/stores/global.store';
import { definePageMeta } from '#imports';
import _ from 'lodash';

definePageMeta({
  layout: 'designer',
});

const DesignerStore = useDesignerStore();
const GlobalStore = useGlobalStore();

const colors = computed(() => {
  return GlobalStore.color;
});
const motives = computed(() => {
  return GlobalStore.motive;
});

const currentIndex = ref({
  color: {
    current: 0,
    last: 4,
  },
  motive: {
    current: 0,
    last: 4,
  },
});

const selectedItem = ref({
  color: {
    name: '',
    color: '',
  },
  motive: {
    name: '',
    img: '',
  },
});
/* push selected value to color state */
const selectColor = (color: Color) => {
  useDesignerStore().updateColor({
    color: color.color,
    price: color.price,
    name: color.name,
  });
  selectedItem.value.color = {
    name: color.name,
    color: color.color,
  };
};
/* push selected value to motive state */
const selectMotive = (motive: Motive) => {
  DesignerStore.updateMotive({
    name: motive.name,
    img: motive.img,
    price: motive.price,
  });
  selectedItem.value.motive = {
    name: motive.name,
    img: motive.img,
  };
};
/* go to e previous position in the array list */
const selectPrevious = (field: 'color' | 'motive') => {
  if (currentIndex.value[field].current >= 1 && currentIndex.value[field].last >= 4) {
    currentIndex.value[field].current--;
    currentIndex.value[field].last--;
  }
};
/* go to a further position in the array list */
const selectNext = (field: 'color' | 'motive') => {
  const length = field === 'color' ? colors.value.length : motives.value.length;
  if (currentIndex.value[field].last <= length - 1) {
    currentIndex.value[field].current++;
    currentIndex.value[field].last++;
  }
};

onMounted(() => {
  /* get values from pinia */
  if (_.isEmpty(selectedItem.value.motive.name) || _.isEmpty(selectedItem.value.color.name)) {
    selectedItem.value.motive = {
      name: DesignerStore.motive.name,
      img: DesignerStore.motive.img,
    };
    selectedItem.value.color = {
      name: DesignerStore.color.name,
      color: DesignerStore.color.color,
    };
  }
  /* set initial values */
  if (_.isEmpty(selectedItem.value.motive.name) && _.isEmpty(selectedItem.value.color.name)) {
    selectMotive(GlobalStore.motive[0]);
    selectColor(GlobalStore.color[0]);
  }
});
</script>

<style scoped></style>
