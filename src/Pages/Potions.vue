<script setup>
import { ref, onMounted } from 'vue'
const controller = require('../controllers/potionsController');

const list = ref([])
const pageNumber = ref(1)
const error = ref(null)

onMounted(async () => {
  try {
    list.value = await controller.fetchData(pageNumber.value)
  } catch (err) {
    error.value = err.message
  }
})

const nextPage = async () => {
   list.value, pageNumber.value = await controller.nextPage(pageNumber.value);
}

const previousPage = async () => {
   list.value, pageNumber.value = await controller.previousPage(pageNumber.value);
}
</script>

<template>
      <div v-if="error">{{ error }}</div>
  <div v-else>
  <div class="container">
    <h1> Potions </h1>
    <div class="potions-list">
      <div v-for="item in list" :key="item.id" class="potion-item">
        <img :src="item.attributes.image" alt="Image de la potion" />
        <div class="potion-details">
          <p v-if="item.attributes.name"><span>Nom : </span>{{ item.attributes.name }}</p>
          <p v-if="item.attributes.difficulty"><span>Difficulté : </span>{{ item.attributes.difficulty }}</p>
          <p v-if="item.attributes.time"><span>Temps : </span>{{ item.attributes.time }}</p>
          <p v-if="item.attributes.inventors"><span>Créateur : </span>{{ item.attributes.inventors }}</p>
          <p v-if="item.attributes.ingredients"><span>Ingrédients : </span> {{ item.attributes.ingredients }}</p>
          <p v-if="item.attributes.effect"><span>Effet :</span> {{ item.attributes.effect }}</p>
          <p v-if="item.attributes.side_effects"><span>Effet secondaire : </span>{{ item.attributes.side_effects }}</p>
        </div>
        <a :href="item.attributes.wiki">
          <p>En savoir plus avec le wiki</p>
        </a>
      </div>
    </div>
    <div class="pagination">
      <button @click="previousPage">Page Précédente</button>
      <span>Page {{ pageNumber }}</span>
      <button @click="nextPage">Page Suivante</button>
    </div>
  </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

.potions-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.potion-item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.potion-item img {
  max-width: 100%;
  max-height: 200px; /* Vous pouvez ajuster cette valeur en fonction de la taille souhaitée */
  height: auto;
  display: block;
}

.potion-details {
  padding: 10px;
}

.potion-details p {
  margin: 5px 0;
}

.potion-details p span {
  font-weight: bold;
}

.pagination {
  margin-top: 20px;
}

.pagination button {
  padding: 5px 10px;
  margin: 0 5px;
  background-color: #eee;
  border: 1px solid #ccc;
  border-radius: 5px;
  cursor: pointer;
}

.pagination button:hover {
  background-color: #ddd;
}
</style>
