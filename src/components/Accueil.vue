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
  <h1> Page d'accueil </h1>

  <div class="grid-container">
    <div v-for="(box, index) in boxes" :key="index" class="box">
      <!-- Redirection vers le components Potions.vue -->
      <h3 v-if="box.title === 'Potions'">
        <router-link :to="{ name: 'potions' }">{{ box.title }}</router-link>
      </h3>
      <!-- Pour les autres titres sans lien -->
      <h3 v-else>
        {{ box.title }}
      </h3>
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
  gap: 50px;
}

.box {
  border: 1px solid #ccc;
  padding: 30px;
}

ul {
  list-style-type: none;
  padding: 0;
}
</style>
