<script setup>
    import { ref } from 'vue';
    import Modal from './Modal.vue'
    defineProps(['open', 'src', 'alt'])
</script>

<template>
    <Modal :open="open" @close="$emit('close')">
        <p class="image is-4by3">
            <img :src="src" :alt="alt">
        </p>
    </Modal>
</template>