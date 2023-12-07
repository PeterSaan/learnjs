<script setup>
    import { ref } from 'vue';
    import Message from '../components/Message.vue'
    let messageOpen = ref(true);
</script>

<template>
    <article class="message">
        <div class="message-header">
            <p>Peter Saan</p>
            <button class="open" aria-label="open" @click="messageOpen=true"></button>
        </div>
        <div class="message-body">
            <p>Koerad on paremad kui kassid</p>
        </div>
    </article>
    <Message :open="messageOpen" @close="messageOpen=false">

    </Message>
</template>