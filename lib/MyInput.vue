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
  placeholder: {
    type: String,
    default: ''
  }
})
</script>