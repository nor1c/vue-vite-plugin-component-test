<template>
  <div>
    input plugin
    <input
      :type="type"
      :placeholder="placeholder"
    >
  </div>
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