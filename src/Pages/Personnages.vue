<script setup>
import { ref, onMounted } from 'vue';
import { getPersonnages } from '../controllers/personnagesController';

const list = ref([]);
const pageNumber = ref(1);
const erreur = ref(0);
const defaultImageURL = new URL('../DefaultImg/character.png', import.meta.url).href;
const searchQuery = ref('');

const fetchData = async () => {
  try {
    const query = searchQuery.value ? `&filter[name_cont]=${searchQuery.value}` : '';
    list.value = await getPersonnages(`?page[size]=16&page[number]=${pageNumber}${query}`);
    erreur.value = 0;

    //Revient en haut de la page après chaque recherche ou changement de page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    erreur.value = error.response.status;
  }
};

const nextPage = async () => {
  pageNumber.value++;
  fetchData();
};

const previousPage = async () => {
  if (pageNumber.value > 1) {
    pageNumber.value--;
    fetchData();
  }
};

const setDefaultImage = (event) => {
  event.target.src = defaultImageURL;
};

const searchCharacters = () => {
  pageNumber.value = 1; // Reset page number when performing a new search
  fetchData();
  searchQuery.value = ''; // Clear the search query
};

const reloadPage = () => {
  window.location.reload(); // Recharge la page
};

onMounted(fetchData);
</script>


<template>
  <div v-if="erreur !== 0">{{ erreur }}</div>
  <div v-else>
    <div v-if="list.length === 0" class="no-results-message">
      Aucun résultat trouvé. Cliquez <a href="#" @click="reloadPage">ici</a> pour recharger la page.
    </div>
    <div v-else>
    <div class="container">
      <h1>Personnages</h1>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher..." v-model="searchQuery" @keyup.enter="searchCharacters">
        <button @click="searchCharacters">Rechercher</button>
      </div>
      <div class="characters-list">
          <div v-for="item in list" :key="item.id" class="characters-item">
            <img v-if="item.attributes.image" :src="item.attributes.image" alt="Image du personnage" @error="setDefaultImage" />
            <img v-else :src="defaultImageURL" alt="Image par défaut" />
            <div class="characters-details">
              <p class="item-details padding"><span>Nom : </span>{{ item.attributes.name || "N/A" }}</p>
              <p class="item-details padding"><span>Maison : </span>{{ item.attributes.house || "N/A" }}</p>
              <p class="padding"><span>La date et le lieu de naissance : </span>{{ item.attributes.born || "N/A" }}</p>
              <a :href="item.attributes.wiki">
                <p class="Wiki">En savoir plus avec le wiki</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="pagination">
        <button class="btnChangePage" @click="previousPage">Page Précédente</button>
        <span class="pageNumber">{{ pageNumber }}</span>
        <button class="btnChangePage" @click="nextPage">Page Suivante</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.btnChangePage {
  background-color: #4c8a3c;
  cursor: pointer;
}

.search-bar {
  margin-bottom: 40px;
}

.search-bar input {
  width: 70%;
  padding: 10px;
  border: 2px solid #525050;
  border-radius: 5px;
  font-size: 16px;
  background-color: rgb(243, 243, 243);
  color: #000000;
  margin-right: 20px;
}

.search-bar button {
  padding: 10px 20px;
  background-color: #4c8a3c;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
}

span {
  font-weight: bold;
}

h1 {
  color: #000000;
}

.characters-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 30px;
  justify-items: center;
}

.characters-item {
  background-color: rgb(241, 237, 237);
  width: 100%;
  height: 900px;
  border: 10px double #4c8a3c;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  position: relative; /* Ajout de la position relative */
}

.item-details {
  border-bottom: 3px solid #000000;
  height: 10%;
  margin-top: 20px;
}

.characters-item:hover {
  transform: scale(1.02);
}

.padding {
  overflow: auto;
  padding: 10px 30px;
  height: 17%;
}

.characters-item img {
  height: 60%;
  border-radius: 15px;
  margin-top: 40px;
}

img {
  max-width: 100%;
}

.characters-details {
  border-bottom: 1px solid #ccc;
  height: 30%;
  color: black;
}

.Wiki {
  background-color: rgba(0, 123, 255, 1);
  padding: 15px;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  border-radius: 0 0 14px 14px;
  height: 3%;
}

.Wiki:hover {
  background-color: rgba(0, 123, 255, 0.8);
}

.no-results-message {
  text-align: center;
  font-size: 50px;
  color: red;
  margin-top: 20px;
}
</style>
