<script setup>
    import { ref } from 'vue';
    import Message from '../components/Message.vue'
    let messageOpen = ref(false);
</script>

<template>
    <button class="button is-primary" @click="messageOpen = true" v-if="messageOpen == false">Open message</button>
    <button class="button is-primary" @click="messageOpen = false" v-if="messageOpen == true">Close message</button>
    <Message :open="messageOpen" @close="messageOpen = false">
      <div class="message-body">
        Koerad on paremad kui kassid 🐱‍🚀
      </div>
    </Message>
</template>