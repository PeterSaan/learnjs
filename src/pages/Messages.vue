<script setup>
    import { ref } from 'vue';
    import Message from '../components/Message.vue'
    let messageOpen = ref(true);
</script>

<template>
    <article class="message is-warning">
        <div class="message-header">
            <p>Warning</p>
            <button class="delete" aria-label="delete"></button>
        </div>
        <div class="message-body">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. <strong>Pellentesque risus mi</strong>, <em>tempus</em> quis placerat ut, porta nec nulla. Vestibulum rhoncus ac ex sit amet fringilla. Nullam gravida purus diam, et dictum <a>felis venenatis</a> efficitur. Aenean ac <em>eleifend lacus</em>, in mollis lectus. Donec sodales, arcu et sollicitudin porttitor, tortor urna tempor ligula, id porttitor mi magna a neque. Donec dui urna, vehicula et sem eget, facilisis sodales sem.
        </div>
    </article>
</template>