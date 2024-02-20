<script setup>
import { ref } from 'vue'

// Exemple de données pour démontrer
const boxes = ref([
  { title: 'Potions', items: ['Item 1.1', 'Item 1.2', 'Item 1.3'] },
])
</script>

<template>
  <h1> Page Potions </h1>
</template>

<style scoped>
h1{
    color: red;
}
</style>
