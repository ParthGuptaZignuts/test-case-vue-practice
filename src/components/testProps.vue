<script setup lang="ts">
import { defineProps } from 'vue';

// Interface
interface Journey {
  from?: string
  to?: string
}
interface Ticket {
  title?: string
  price?: string
  journey?: Journey
}
interface Props {
  ticket?: Ticket
}

// Props
const props = defineProps<Props>()
</script>

<template>
    <div>
      <div>
        <span v-if="props?.ticket?.title">
          {{ 'Ticket title' }}: {{ props?.ticket?.title }}
        </span>
        <span v-if="props?.ticket?.price">
          {{ 'Price is' }}: {{ props?.ticket?.price }}
        </span>
        <span v-if="props?.ticket?.journey?.from && props?.ticket?.journey?.to">
          {{ 'Journey from' }}: {{ props?.ticket?.journey?.from }} {{ 'to' }}: {{ props?.ticket?.journey?.to }}
        </span>
        <span v-if="props?.ticket?.title">
          {{ 'Are you excited' }}
        </span>
      </div>
    </div>
  </template>
  