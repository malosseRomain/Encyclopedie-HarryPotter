
<script setup>
import { ref, onMounted } from 'vue'
import { getLivres } from '../controllers/livresController';

const list = ref([])
const erreur = ref(0);

const fetchData = async () => {
 try {
 list.value = await getLivres();
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
 <div class="books-details">
 <p v-if="item.attributes.title" class="item-details padding"><span>Nom : </span>{{ item.attributes.title }}</p>
 <p v-if="item.attributes.pages" class="item-details padding"><span>Nombre de page : </span>{{item.attributes.pages }}</p>
 <p v-if="item.attributes.release_date" class="item-details padding"><span>Date de sortie : </span>{{item.attributes.release_date }}</p>
 <p v-if="item.attributes.author" class="item-details padding"><span>Créateur : </span>{{item.attributes.author }}</p>
 <p v-if="item.attributes.summary" class="PrettyDisplay padding"><span>Résumé :</span> {{item.attributes.summary }}</p>
 </div>
 <a :href="item.attributes.wiki">
 <p class="Wiki">En savoir plus avec le wiki</p>
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

span{
 font-weight: bold;
}

h1 {
 color: #000000;
}

.books-list {
 display: grid;
 grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
 grid-gap: 30px;
 justify-items: center;
}

.books-item {
 background-color: rgb(241, 237, 237);
 width: 100%;
 border: 10px double #834545;
 border-radius: 25px;
 transition: transform 0.3s ease-in-out;
}

.item-details {
 border-bottom: 3px solid #000000;
}

.books-item:hover {
 transform: scale(1.02);
}

.padding {
 padding-bottom: 20px;
 padding-right: 20px;
 padding-left: 20px;
}

.books-item img {
 width: 100%;
 height: auto;
  border-radius: 15px;
}

.books-details {
 border-bottom: 1px solid #ccc;
 height: 400px;
 color: black;
}

a {
 text-decoration: none;
 color: white;
}

.PrettyDisplay {
 text-align: justify;
 overflow: auto;
 height: 32%;
}

.Wiki {
 background-color: rgba(0, 123, 255, 1);
 padding: 15px;
 margin: 0;
 border-radius: 0 0 15px 15px;
}
</style>
