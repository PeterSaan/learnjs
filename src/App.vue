<script setup>
import Tabs from './components/Tabs.vue';
</script>

<template>
  <tabs></tabs>
  <Suspense>
    <router-view></router-view>
  </Suspense>
</template>
