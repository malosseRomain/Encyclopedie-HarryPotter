<script setup>
import { ref, onMounted } from 'vue'
import { getLivres } from '../controllers/livresController';

const list = ref([])
const erreur = ref(0);

const fetchData = async () => {
  try {
    list.value = await getLivres(pageNumber.value);
    erreur.value = 0;
  } catch (error) {
    erreur.value = error.response.status;
  }
}


onMounted(fetchData)
</script>

<template>
  <div v-if="erreur !== 0">{{ erreur }}</div>
  <div v-else>
    <div class="container">
      <h1> Livres </h1>
      <div class="books-list">
        <div v-for="item in list" :key="item.id" class="books-item">
          <img v-if="item.attributes.cover" :src="item.attributes.cover" alt="Image du livre" />
          <div class="potion-details">
            <p v-if="item.attributes.title"><span>Nom : </span>{{ item.attributes.title }}</p>
            <p v-if="item.attributes.pages"><span>Nombre de page : </span>{{ item.attributes.pages }}</p>
            <p v-if="item.attributes.release_date"><span>Date de sortie : </span>{{ item.attributes.release_date }}</p>
            <p v-if="item.attributes.author"><span>Créateur : </span>{{ item.attributes.author }}</p>
            <p v-if="item.attributes.summary"><span>Résumé :</span> {{ item.attributes.summary }}</p>
          </div>
          <a :href="item.attributes.wiki">
            <p>En savoir plus avec le wiki</p>
          </a>
        </div>
      </div>
    </div>
  </div>
</template>


<style scoped>
.container {
  padding: 20px;
  text-align: center;
}

.books-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.books-item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.books-item img {
  max-width: 100%;
  max-height: 200px;
  /* Vous pouvez ajuster cette valeur en fonction de la taille souhaitée */
  height: auto;
  display: block;
}

.books-details {
  padding: 10px;
}

.books-details p {
  margin: 5px 0;
}

.books-details p span {
  font-weight: bold;
}
</style>