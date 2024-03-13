<script setup>
import { ref } from 'vue'
import axios from 'axios'

const boxes = ref([])

const getImageBook = (response) => {
  return response.data.data[0].attributes.cover
}

const getImage = (response) => {
  return response.data.data[0].attributes.image
}

axios.get('https://api.potterdb.com/v1/books?page[size]=1')
  .then(response => {
    const imageUrl = getImageBook(response)
    boxes.value.push({ title: 'Livres', items: [imageUrl] })
  })

axios.get('https://api.potterdb.com/v1/characters?page[size]=3')
  .then(response => {
    const imageUrl = getImage(response)
    boxes.value.push({ title: 'Personnages', items: [imageUrl] })
  })

axios.get('https://api.potterdb.com/v1/potions?page[size]=1')
  .then(response => {
    const imageUrl = getImage(response)
    boxes.value.push({ title: 'Potions', items: [imageUrl] })
  })

axios.get('https://api.potterdb.com/v1/spells?page[size]=1')
  .then(response => {
    const imageUrl = getImage(response)
    boxes.value.push({ title: 'Sorts', items: [imageUrl] })
  })
</script>

<template>
  <h1> Encyclopédie sur l'univers de Harry Potter </h1>
  <p>Bienvenue dans l'univers de Harry Potter, vous êtes ici sur 
     une encyclopédie exhaustive qui va vous plonger profondément dans le monde magique créé par J.K. Rowling. 
     Cet univers captivant né en 1997 a ensorcelé des millions de lecteurs à travers le monde. 
     Cette encyclopédie est un guide complet pour les passionnés de magie, de potions, de sorts et d'aventures épiques.</p>
  <div class="grid-container">
    <div v-for="(box, index) in boxes" :key="index" class="box">

      <h3>
        <router-link :to=' box.title '>{{ box.title }}</router-link>
      </h3>

      <img :src="box.items[0]" alt="Image de {{ box.title }}" />

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

img {
  max-width: 100%;
  max-height: 200px;
}

</style>
