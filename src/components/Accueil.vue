<script setup>
import { ref } from 'vue'

// Exemple de données pour démontrer
const boxes = ref([
  { title: 'Potions', items: ['Item 1.1', 'Item 1.2', 'Item 1.3'] },
  { title: 'Sorts', items: ['Item 2.1', 'Item 2.2', 'Item 2.3'] },
  { title: 'Livre', items: ['Item 3.1', 'Item 3.2', 'Item 3.3'] },
  { title: 'Personnages', items: ['Item 4.1', 'Item 4.2', 'Item 4.3'] },
])
</script>

<template>
  <h1> Page d'acceuil </h1>
  <div class="grid-container">
    <div v-for="(box, index) in boxes" :key="index" class="box">
      <h3>{{ box.title }}</h3>
      <ul>
        <li v-for="(item, i) in box.items" :key="`item-${i}`">{{ item }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

h1{
    color: red;
}

.grid-container {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;
}

.box {
  border: 1px solid #ccc;
  padding: 20px;
}

ul {
  list-style-type: none;
  padding: 0;
}

li:not(:last-child)::after {
  content: ', ';
}
</style>
