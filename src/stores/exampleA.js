import { defineStore } from "pinia"

export const exampleAStore = defineStore({
  id: "exampleA",
  state: () => ({
    exampleA: "GGGG",
  }),
  getters: {
    getExampleA: (state) => {
      state.exampleA = "HHHHHHH"
    },
  },
  actions: {
    setExampleA() {
      this.exampleA = "HHHHHH"
    },
  },
})
