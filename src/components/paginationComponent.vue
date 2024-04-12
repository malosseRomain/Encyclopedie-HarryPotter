<script setup>
const props = defineProps({
    parentName: {
        type: String,
        required: true
    },
    nextPage: {
        type: Function,
        required: true
    },
    previousPage: {
        type: Function,
        required: true
    },
    goToPage: {
        type: Function,
        required: true
    },
    totalPages: {
        type: Number,
        required: true
    },
    errorPagination: {
        type: String,
        required: false
    }
});


const pageNumber = defineModel('pageNumber');
</script>

<template>
    <div class="pagination">
        <div class="error-message" v-if="errorPagination">{{ errorPagination }}</div>

        <button :class="['btnChangePage', parentName]" @click="previousPage">Page Précédente</button>
        <span>
            page 
            <input type="number" v-model.lazy="pageNumber" @keyup.enter="goToPage"> 
            sur {{totalPages}}
        </span>
        <button :class="['btnChangePage', parentName]" @click="nextPage">Page Suivante</button>
    </div>
</template>


<style scoped>
.error-message {
  color: red;
  font-size: 14px;
}

.pagination {
  margin: 50px;

  .btnChangePage {
    cursor: pointer;

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

  span {
    color: #000000;
    background-color: #ffffff;
    margin: 0 20px;
    padding: 11px;
    border-radius: 5px;
    font-weight: bold;
  }

  input {
    font-size: 20px;
    width: 25px;
    padding: 5px;
    border-radius: 5px;
    font-size: 16px;
    text-align: center;
    background-color: rgb(243, 243, 243);
    color: #000000;
    appearance: textfield;
    cursor: pointer;
 }
}
</style>