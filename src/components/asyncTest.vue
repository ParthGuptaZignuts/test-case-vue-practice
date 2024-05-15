
<script setup lang="ts">
import { ref } from 'vue'

//Data
const count = ref<number>(0)

//Methods
const handleClick = () => {
  count.value += 1
}
</script>
<template>
  <div>
    <p>Count: {{ count }}</p>
    <button @click="handleClick">Increment</button>
  </div>
</template>



<style scoped>
</style>