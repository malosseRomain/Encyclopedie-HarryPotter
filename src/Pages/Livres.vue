<script setup>
import { ref, onMounted } from 'vue'
import livreComponent from '../components/livreComponent.vue';
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
  <section v-else>
    <h1> Livres </h1>
    <ul>
      <livreComponent v-for="item in list" :key="item.id" :item="item" :msg="item" class="books-item" />
    </ul>
  </section>
</template>


<style scoped>
section {
  padding: 20px;
  text-align: center;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-items: center;
}

.books-item {
  background-color: rgb(241, 237, 237);
  width: 100%;
  transition: transform 0.3s ease-in-out;

  &:hover {
    transform: scale(1.02);
  }
}


h1 {
  color: #000000;
}
</style>