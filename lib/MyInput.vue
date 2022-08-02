<template>
  <input
    :type="type"
    :placeholder="placeholder"
    :value="modelValue"
    @input="$emit('update:modelValue', $event.target.value)"
  >
</template>

<script setup>
defineEmits([
  'update:modelValue'
])

defineProps ({
  type: {
    type: String,
    default: 'text'
  },
  placeholder: {
    type: String,
    default: ''
  },
  modelValue: {
    type: String,
    default: ''
  }
})
</script>