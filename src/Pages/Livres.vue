<script setup>
import { ref, onMounted } from 'vue'
import axios from "axios"

const booksList = ref([])
const moviesList = ref([])

onMounted(async () => {
  try {
    let booksResult = await axios.get("https://api.potterdb.com/v1/books?page[size]=16");
    booksList.value = booksResult.data.data;
    
    let moviesResult = await axios.get("https://api.potterdb.com/v1/movies?page[size]=16");
    moviesList.value = moviesResult.data.data;
  } catch (error) {
    console.error("Une erreur s'est produite :", error)
  }
})
</script>

<template>
  <div class="container">
    <h1> Livres </h1>
    <div class="books-list">
      <div v-for="book in booksList" :key="book.id" class="books-item">
        <a :href="book.attributes.wiki">
          <img :src="book.attributes.image" alt="Image du livre" />
        </a>
        <div class="books-details">
          <p><span>Nom :</span>{{ book.attributes.name }}</p>
          <p><span>Auteur :</span>{{ book.attributes.author }}</p>
          <p><span>Genre :</span>{{ book.attributes.genre }}</p>
        </div>
      </div>
    </div>
    
    <h1> Films </h1>
    <div class="movies-list">
      <div v-for="movie in moviesList" :key="movie.id" class="movies-item">
        <a :href="movie.attributes.wiki">
          <img :src="movie.attributes.image" alt="Image du film" />
        </a>
        <div class="movies-details">
          <p><span>Titre :</span>{{ movie.attributes.title }}</p>
          <p><span>Réalisateur :</span>{{ movie.attributes.director }}</p>
          <p><span>Genre :</span>{{ movie.attributes.genre }}</p>
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

.books-list{
  margin-bottom: 100px;
}

.books-list, .movies-list {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 20px;
}

.books-item, .movies-item {
  width: 250px;
  border: 1px solid #ccc;
  border-radius: 8px;
  overflow: hidden;
}

.books-item img, .movies-item img {
  width: 100%;
  height: auto;
  display: block;
}

.books-details, .movies-details {
  padding: 10px;
}

.books-details p, .movies-details p {
  margin: 5px 0;
}

.books-details p span, .movies-details p span {
  font-weight: bold;
}
</style>
