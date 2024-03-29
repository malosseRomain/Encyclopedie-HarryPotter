<script setup>
import { ref, onMounted } from 'vue'
import { getPotions } from '../controllers/potionsController';


const list = ref([])
const pageNumber = ref(1)
const erreur = ref(0);
const totalItems = ref(17*10);
const defaultImageURL = new URL('../DefaultImg/potion.jpg', import.meta.url).href;
const searchQuery = ref('');
const errorMessage = ref("");


const fetchData = async () => {
  try {
    const query = searchQuery.value ? `&filter[name_cont]=${searchQuery.value}` : '';
    list.value = await getPotions(`?page[size]=10&page[number]=${pageNumber.value}${query}`);
    totalItems.value = list.length;
    erreur.value = 0;

    // Revient en haut de la page après chaque recherche ou changement de page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  } catch (error) {
    erreur.value = error.response.status;
  }
};


const nextPage = async () => {
  pageNumber.value++;
  fetchData();
  scrollToTop();
};

const previousPage = async () => {
  if (pageNumber.value > 1) {
    pageNumber.value--;
    fetchData();
    scrollToTop();
  }
};

const goToPage = () => {
  if (pageNumber.value <= 17) {
    fetchData();
    scrollToTop();
    errorMessage.value = "";
  } else {
    errorMessage.value = "Le numéro de page est trop élevé.";

    setTimeout(() => {
      errorMessage.value = "";
    }, 3000);
  }
};

const setDefaultImage = (event) => {
  event.target.src = defaultImageURL;
};

const search = () => {
  pageNumber.value = 1; 
  fetchData();
  searchQuery.value = ''; 
  scrollToTop();
};

const reloadPage = () => {
  window.location.reload(); 
};

const calculateTotalPages = (totalItems, itemsPerPage) => {
  return Math.ceil(17*10 / 10);
};

const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
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
      <h1>Potions</h1>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher..." v-model="searchQuery" @keyup.enter="search">
        <button @click="search">Rechercher</button>
      </div>
      <div class="potions-list">
          <div v-for="item in list" :key="item.id" class="potions-item">
            <img v-if="item.attributes.image" :src="item.attributes.image" alt="Image de la potions" @error="setDefaultImage" />
            <img v-else :src="defaultImageURL" alt="Image par défaut" />
            <div class="potions-details">
              <p class="item-details padding"><span>Nom : </span>{{ item.attributes.name || "N/A"}}</p>
              <p class="item-details padding"><span>Difficulté : </span>{{ item.attributes.difficulty || "N/A"}}</p>
              <p class="item-details padding"><span>Ingrédients : </span> {{ item.attributes.ingredients || "N/A"}}</p>
              <p class="padding"><span>Effet :</span> {{ item.attributes.effect || "N/A"}}</p>
              <a :href="item.attributes.wiki">
                <p class="Wiki">En savoir plus avec le wiki</p>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div class="error-message" v-if="errorMessage">{{ errorMessage }}</div>
      <div class="pagination">
        <button class="btnChangePage" @click="previousPage">Page Précédente</button>
        <span class="paginationNumberOfPage">page <input type="number" v-model.lazy="pageNumber" @keyup.enter="goToPage" class="inputPagination"> sur {{ calculateTotalPages(totalItems, 16)}}</span>
        <button class="btnChangePage" @click="nextPage">Page Suivante</button>
      </div>
      
    </div>
  </div>
</template>

<style scoped>
.container {
  padding: 20px;
}

.paginationNumberOfPage {
  color: #000000;
  margin: 0 20px;
}

.btnChangePage {
  background-color: #1a58b6;
  cursor: pointer;
}

.pageNumber {
  font-size: 20px;
  color: #000000;
}

.pagination {
  margin: 50px;
  padding-right: 20px;
}

.inputPagination {
  width: 25px;
  padding: 5px;
  border: 2px solid #361ab6;
  border-radius: 5px;
  font-size: 16px;
  text-align: center;
  background-color: rgb(243, 243, 243);
  color: #000000;
  appearance: textfield;
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
  background-color: #361ab6;
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

.potions-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 30px;
  justify-items: center;
}

.potions-item {
  background-color: rgb(241, 237, 237);
  width: 100%;
  height: 900px;
  border: 10px double #361ab6;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  position: relative; /* Ajout de la position relative */
}

.item-details {
  border-bottom: 3px solid #000000;
  height: 10%;
  margin-top: 20px;
}

.potions-item:hover {
  transform: scale(1.02);
}

.padding {
  overflow: auto;
  padding: 10px 30px;
  height: 17%;
}

.potions-item img {
  height: 50%;
  border-radius: 15px;
  margin-top: 40px;
}

img {
  max-width: 100%;
}

.potions-details {
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

.error-message {
  color: red;
  font-size: 14px;
}
</style>
