
<script setup lang="ts">
import { computed, ref } from 'vue';

// Data
const fruits = ref<any[]>(['apple', 'banana', 'orange'])

// Computed
const numFruits = computed(() => {
  return fruits.value.length
})

// Methods
const fruitsName = () => {
  return fruits.value.length
}
</script>

<template>
    <div>
      <ol>
        <li
          v-for="fruit in fruits"
          :key="fruit"
        >
        </li>
      </ol>

      <p>
        Number of fruits(computed): {{ numFruits }}
      </p>
      <p>
        Number of fruits(methods): {{ fruitsName() }}
      </p>

    
    </div>
  </template>
  