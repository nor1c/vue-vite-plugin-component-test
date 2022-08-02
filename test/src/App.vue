<template>
  <MyInput 
    v-model="test"
    :placeholder="'Enter your name'"
  />

  {{ test }}
</template>

<script setup>
import { ref } from 'vue'
import { MyInput } from '../../dist/my-input.es'

const test = ref('')
</script>