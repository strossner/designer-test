import { defineStore } from 'pinia';
const defaultValue = (): Designer => ({
  color: {
    name: '',
    color: '',
    price: 0,
  },
  motive: {
    name: '',
    img: '',
    price: 0,
  },
});
export const useDesignerStore = defineStore('designer', {
  state: () => defaultValue(),
  actions: {
    updateColor(value: Color) {
      this.color = {
        name: value.name,
        color: value.color,
        price: value.price,
      };
    },
    updateMotive(value: Motive) {
      this.motive = {
        name: value.name,
        img: value.img,
        price: value.price,
      };
    },
    reset() {
      this.color = defaultValue().color;
      this.motive = defaultValue().motive;
    },
  },
});
