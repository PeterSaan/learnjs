<script setup>
    import { ref, watch } from 'vue';
    import Message from '../components/Message.vue';
    let messageOpen = ref(false);
    let dogPerson = ref(true);
    let whatAnimal = ref('🐶');

    watch(dogPerson, (abc) => {
        whatAnimal.value = abc ? "🐶" : "🐱";
    });
</script>

<template>
    <button class="button is-primary is-medium" @click="messageOpen = true" v-if="messageOpen == false">Open
        message</button>
    <button class="button is-primary is-medium" @click="messageOpen = false" v-if="messageOpen == true">Close
        message</button>
    <Message :animal="whatAnimal" :open="messageOpen" @close="messageOpen = false">
        <div class="message-body" v-if="dogPerson == true">Dogs are better than cats 🐶👑</div>
        <div class="message-body" v-if="dogPerson == false">Cats are better than dogs 🐱👑</div>
        <button class="button is-info" @click="dogPerson = false" v-if="dogPerson == true">I'm a cat person...</button>
        <button class="button is-info" @click="dogPerson = true" v-if="dogPerson == false">I'm a dog person...</button>
    </Message>
</template>