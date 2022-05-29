import { defineStore } from "pinia"

export const useCounterStore = defineStore({
  id: "counter",
  state: () => ({
    counter: 0,
    piniaMessage: "DDDD",
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++
    },
    changeFromPinia() {
      this.piniaMessage = "FFFFFF"
    },
  },
})
