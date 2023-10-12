<script setup>
import { ref } from 'vue';

const message = ref('Hello vue!');
const items = ref(['leib', 'sai', 'piim', 'viin']);
function add() {
  this.items.push(message)
}
</script>

<template>
  <button @click="add">(C)Lick me</button>
  <input type="text" v-model="message">
  <h1>{{ message.split("").reverse().join("") }}</h1>
  <ul>
    <li v-for="item in items">{{ item }}</li>
  </ul>
</template>
