<script setup>
import { ref } from 'vue';

const message = ref('Hello vue!') 
</script>

<template>
  <button @click="message='VueVue'">(C)Lick me</button>
  <input type="text" v-model="message">
  <h1>{{ message.split("").reverse().join("") }}</h1>
</template>
