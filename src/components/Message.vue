<script setup>
    defineProps({
        'open': {
            Boolean,
            required: true,
        }, 
        'animal': {
            String,
            required: true,
        }
    });
</script>

<template>
    <article class="message is-warning is-medium" v-if="open">
        <div class="message-header">
            <p>Fav animal: {{ animal }}</p>
            <button class="delete" @click="$emit('close')"></button>
        </div>
        <slot></slot>
    </article>
</template>