<template>
  <input
    :type="type"
    :placeholder="placeholder"
  >
</template>

<script setup>
defineProps ({
  type: {
    type: String,
    default: 'text'
  },
  plceholder: {
    type: String,
    default: ''
  }
})
</script>