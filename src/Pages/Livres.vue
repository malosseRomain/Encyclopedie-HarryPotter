<script setup>
import { ref, onMounted } from 'vue'
import livreComponent from '../components/livreComponent.vue';
import { getLivres } from '../controllers/livresController';

const list = ref([])
const errorData = ref(0);

const fetchData = async () => {
  try {
    list.value = await getLivres();
    errorData.value = 0;
  } catch (error) {
    errorData.value = error.response.status;
  }
}

onMounted(fetchData)
</script>

<template>
  <div v-if="errorData !== 0">{{ errorData }}</div>
  <section v-else>
    <h1> Livres </h1>
    <ul>
      <livreComponent v-for="item in list" :key="item.id" :item="item" :msg="item" />
    </ul>
  </section>
</template>


<style scoped>
section {
  padding: 0 100px;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  grid-gap: 30px;
  justify-items: center;
}


h1 {
  color: #ff0000;
}
</style>
