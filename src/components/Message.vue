<script setup>
    defineProps(['open', 'animal']);
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