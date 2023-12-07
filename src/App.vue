<script setup>
import { reactive, ref, computed } from 'vue';
import ItemList from './components/ItemList.vue';

const message = ref('Hello vue!');
let i = 1;
const items = reactive([
  { id: i++, name: 'leib', isDone: true },
  { id: i++, name: 'sai', isDone: true },
  { id: i++, name: 'piim', isDone: true },
  { id: i++, name: 'kommid', isDone: true },
]);

const toDoItems = computed(() => {
  return items.filter(item => !item.isDone);
});
const doneItems = computed(() => {
  return items.filter(item => item.isDone);
});

function add() {
  items.push({id: i++, name: message.value, isDone: false});
}
</script>

<template>
  <button @click="add" class="button is-primary">(C)Lick me</button>
  <input type="text" v-model="message">
  <ItemList :items="items" title="All items"></ItemList>
  <ItemList :items="doneItems" title="Done items"></ItemList>
  <ItemList :items="toDoItems" title="To do items"></ItemList>
</template>
