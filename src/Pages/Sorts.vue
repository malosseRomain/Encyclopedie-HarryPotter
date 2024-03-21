<script setup>
import { ref, onMounted } from 'vue'
import { getSorts } from '../controllers/sortsController';


const list = ref([])
const pageNumber = ref(1)
const erreur = ref(0);

const fetchData = async () => {
  try {
    list.value = await getSorts(pageNumber.value);
    erreur.value = 0;
  } catch (error) {
    erreur.value = error.response.status;
  }
}


const nextPage = async () => {
  pageNumber.value++;
  fetchData();
}

const previousPage = async () => {
  if (pageNumber.value > 1) {
    pageNumber.value--
    fetchData();
  }
}

onMounted(fetchData);
</script>

<template>
  <div v-if="erreur !== 0">{{ erreur }}</div>
  <div v-else>
    <div class="container">
      <h1> Sorts </h1>
      <div class="Sorts-list">
        <div v-for="item in list" :key="item.id" class="Sorts-item">
          <img :src="item.attributes.image" alt="Image du sort" />
          <div class="Sorts-details">
            <p v-if="item.attributes.name"><span>Nom : </span>{{ item.attributes.name }}</p>
            <p v-if="item.attributes.category"><span>Catégori : </span>{{ item.attributes.category }}</p>
            <p v-if="item.attributes.effect"><span>Effet : </span>{{ item.attributes.effect }}</p>
            <p v-if="item.attributes.incantation"><span>Incantation : </span>{{ item.attributes.incantation }}</p>
            <p v-if="item.attributes.light"><span>Lumière : </span>{{ item.attributes.light }}</p>
            <p v-if="item.attributes.hand"><span>Mouvement de la main : </span>{{ item.attributes.hand }}</p>
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

.Sorts-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.Sorts-item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.Sorts-item img {
  max-width: 100%;
  max-height: 200px;
  /* Vous pouvez ajuster cette valeur en fonction de la taille souhaitée */
  height: auto;
  display: block;
}

.Sorts-details {
  padding: 10px;
}

.Sorts-details p {
  margin: 5px 0;
}

.Sorts-details p span {
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