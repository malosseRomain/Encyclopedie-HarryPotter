<script setup>
import { ref, onMounted } from 'vue'
const controller = require('../controllers/personnagesController');

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
    <h1> Personnages </h1>
    <div class="characters-list">
      <div v-for="item in list" :key="item.id" class="characters-item">
        <img :src="item.attributes.image" alt="Image du personnage" />
        <div class="characters-details">
          <p v-if="item.attributes.name"><span>Nom : </span>{{ item.attributes.name }}</p>
          <p v-if="item.attributes.house"><span>Maison : </span>{{ item.attributes.house }}</p>
          <p v-if="item.attributes.born"><span>La date et le lieu de naissance : </span>{{ item.attributes.born }}</p>
          <p v-if="item.attributes.died"><span>La date et le lieu de décès : </span>{{ item.attributes.died }}</p>
          <p v-if="item.attributes.animagus"><span>Animagus : </span>{{ item.attributes.animagus }}</p>
          <p v-if="item.attributes.boggart"><span>Épouvantard  : </span>{{ item.attributes.boggart }}</p>
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

.characters-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.characters-item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.characters-item img {
  max-width: 100%;
  max-height: 200px; /* Vous pouvez ajuster cette valeur en fonction de la taille souhaitée */
  height: auto;
  display: block;
}

.characters-details {
  padding: 10px;
}

.characters-details p {
  margin: 5px 0;
}

.characters-details p span {
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