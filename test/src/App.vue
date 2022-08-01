<template>
  <MyInput 
    :placeholder="'Enter your name'"
  />
</template>

<script setup>
import Vue from 'vue'
import MyInput from '../../dist/my-input.es'

Vue.use(MyInput)
</script>