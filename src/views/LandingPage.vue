<template lang="">
  <div @click="changeMessage">
    {{ message }}
  </div>
  <div @click="counter.changeFromPinia">
    {{ counter.piniaMessage }}
  </div>
  <div @click="exampleAState.setExampleA">{{ exampleAState.exampleA }}</div>
</template>
<script>
import { mapActions } from "pinia"
import { ref, onMounted } from "vue"
import { useCounterStore } from "../stores/counter"
import { exampleAStore } from "../stores/exampleA"
import axios from "axios"
export default {
  setup() {
    const message = ref("AAAAA")
    const counter = useCounterStore()
    const exampleAState = exampleAStore()

    function changeMessage() {
      console.log("clicked")
      message.value = "BBBBB"
    }

    async function getLambdaMessage() {
      const response = await axios.get(
        "https://zkhru142hl.execute-api.ap-northeast-2.amazonaws.com/dev/getLambda"
      )
      console.log("response: ", response.data)
      message.value = response.data
    }

    onMounted(() => {
      console.log("onMounted")
      getLambdaMessage()
    })

    return {
      message,
      changeMessage,
      counter,
      exampleAState,
    }
  },
  methods: {
    ...mapActions(useCounterStore, exampleAStore),
  },
}
</script>
<style lang=""></style>
