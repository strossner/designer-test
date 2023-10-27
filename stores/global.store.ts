import { defineStore } from 'pinia';

const defaultValue = (): GlobalState => ({
  color: [],
  motive: [],
});
export const useGlobalStore = defineStore('global', {
  state: () => defaultValue(),
  actions: {
    setColors(value: Array<Color>) {
      this.color = value;
    },
    setMotives(value: Array<Motive>) {
      this.motive = value;
    },
  },
});
