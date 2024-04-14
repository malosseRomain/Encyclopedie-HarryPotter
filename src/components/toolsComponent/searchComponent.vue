<script setup>
const props = defineProps({
    search: {
      type: Function,
      required: true
    },
    parentName: {
      type: String,
      required: true
    }
});

const searchQuery = defineModel('searchQuery');
</script>

<template>
      <div class="search-bar">
        <input type="text" placeholder="Rechercher..." v-model="searchQuery" @keyup.enter="search">
        <button :class="parentName" @click="search">Rechercher</button>
      </div>
</template>

<style scoped>
.search-bar {
  margin-bottom: 40px;

  input {
    width: 70%;
    padding: 10px;
    border: 2px solid #525050;
    border-radius: 5px;
    font-size: 16px;
    background-color: rgb(243, 243, 243, 0.8);
    color: #000000;
    margin-right: 20px;
  }

  button {
    padding: 10px 20px;
    color: white;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;

    &.sorts {
      background-color: #e2d413;
    }

    &.potions {
      background-color: #1a58b6;
    }

    &.personnages {
      background-color: #4c8a3c;
    }
  }
}
</style>