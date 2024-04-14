<script setup>
import { onMounted } from 'vue';

import {
  list,
  totalPages,
  pageNumber,
  searchQuery,
  msgError,
  errorPagination,
  msgErrorData,
  msgErrorSearch
} from '../controllers/potionsController'; //variable

import {
  fetchData,
  search,
  nextPage,
  previousPage,
  goToPage
} from '../controllers/potionsController'; //function

import paginationComponent from '../components/toolsComponent/paginationComponent.vue';
import errorComponent from '../components/toolsComponent/errorComponent.vue';
import searchComponent from '../components/toolsComponent/searchComponent.vue';
import potionComponent from '../components/categoryComponent/potionComponent.vue';

import { reloadPage } from '../utils/actionWindow';


const defaultImageURL = new URL('../DefaultImg/potion.jpg', import.meta.url).href;
const parentName = 'potions';


onMounted(fetchData);
</script>

<template>
  <errorComponent v-if="msgError === msgErrorData" :reloadPage="reloadPage" :msgError="msgErrorData"/>
  <errorComponent v-else-if="msgError === msgErrorSearch" :reloadPage="reloadPage" :msgError="msgErrorSearch"/>

  <section v-else>
    <h1>Potions</h1>
    <searchComponent v-model:searchQuery="searchQuery" :search="search"/>

    <ul>
      <potionComponent v-for="item in list" :key="item.id" :itemProps="item" :msg="item" :defaultImageURL="defaultImageURL" />
    </ul>

      <paginationComponent
    v-model:pageNumber="pageNumber"
    :parentName="parentName"
    :totalPages="totalPages"
    :nextPage="nextPage"
    :previousPage="previousPage"
    :goToPage="goToPage"
    :errorPagination="errorPagination"
  />
  </section>
</template>

<style scoped>
h1 {
  color: #1a58b6;
}

ul {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(450px, 1fr));
  grid-gap: 30px;
  justify-items: center;
  padding: 0 100px;
}
</style>
