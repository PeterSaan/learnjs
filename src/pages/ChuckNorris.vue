<script setup>
    import axios from 'axios';
    import { ref } from 'vue';
    let joke = ref('')
    // axios.get('https://api.chucknorris.io/jokes/random').then(res => {
    //     console.log(res.data.value);
    //     joke.value = res.data.value
    // });

    let res = await axios.get('https://api.chucknorris.io/jokes/random');
    joke.value = res.data.value;
</script>

<template>
    <div class="container">
        <div class="content">
            <h2>
                {{ joke }}
            </h2>
        </div>
    </div>
</template>