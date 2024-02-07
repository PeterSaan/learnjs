<script setup>
    import LeafletMap from '../components/LeafletMap.vue';
    import { ref } from 'vue';

    let coords = ref(null);
    let markers = ref([
        [59.19027204854302, 24.34661582415868],
        [59.926960216031524, 24.543422611366334],
        [59.626960216031524, 24.243422611366334],
        [59.426, 24.4832]
    ]);

    navigator.geolocation.getCurrentPosition(success, error);
    function success(pos) {
        coords.value = [pos.coords.latitude, pos.coords.longitude];
    }
    function error() {
        console.log("Error");
    }
</script>

<template>
    <div>
        <button class="button" @click="coords=[59.49027204854302, 24.94661582415868]">Go to Muuga</button>
        <button class="button" @click="coords=[59.426960216031524, 24.743422611366334]">Go to skol</button>
        <LeafletMap v-if="coords" :center="coords" :zoom="19" :markers="markers"/>
    </div>
</template>

<style scoped>
    
</style>