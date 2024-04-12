<script setup>
const props = defineProps({
    reloadPage: {
        type: Function,
        required: true
    },
    msgError: {
        type: String,
        required: true
    }
});
</script>

<template>
      <div class="no-results-message">
        {{msgError}}. Cliquez <a href="#" @click="reloadPage">ici</a> pour recharger la page.
      </div>
</template>

<style scoped>
.no-results-message {
  text-align: center;
  font-size: 24px;
  color: red;
  background-color: #f8d7da;
  border: 2px solid #f5c6cb; 
  border-radius: 5px;
  padding: 20px; 
  margin-top: 20px; 
}
</style>