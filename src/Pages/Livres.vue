<script setup>
import { onMounted } from 'vue'
import livreComponent from '../components/livreComponent.vue';
import { list, errorData, fetchData } from '../controllers/livresController';

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
