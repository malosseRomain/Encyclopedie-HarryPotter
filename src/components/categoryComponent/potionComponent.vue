<script setup>
const props = defineProps({
    itemProps: {
      type: Object,
      required: true
    },
    defaultImageURL: {
      type: String,
      required: true
    }
});
</script>

<template>
  <div class="potions-item">
    <img v-if="itemProps.attributes.image" :src="itemProps.attributes.image" :alt="'Image de la potion : ' + itemProps.attributes.name"/>
    <img v-else :src="defaultImageURL" alt="Image par défaut de potion" />
    
    <div class="potions-details">
      <p><strong>Nom : </strong>{{ itemProps.attributes.name || "N/A"}}</p>
      <p><strong>Difficulté : </strong>{{ itemProps.attributes.difficulty || "N/A"}}</p>
      <p><strong>Ingrédients : </strong> {{ itemProps.attributes.ingredients || "N/A"}}</p>
      <p><strong>Effet :</strong> {{ itemProps.attributes.effect || "N/A"}}</p>
      <a :href="itemProps.attributes.wiki">
        <p class="Wiki">En savoir plus avec le wiki</p>
      </a>
    </div>
  </div>
</template>

<style scoped>

.potions-item {
  background-color: rgb(241, 237, 237, 0.9);
  width: 100%;
  height: 900px;
  border: 10px double #361ab6;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 50%;
    border-radius: 15px;
    margin-top: 40px;
    max-width: 100%;
  }
}

.potions-details {
  height: 30%;
  color: black;

  & > p {
    border-bottom: 3px solid #000000;
    margin-top: 20px;
    overflow: auto;
    padding: 10px 30px;
    height: 17%;
  }
}

.Wiki {
  background-color: rgba(0, 123, 255, 1);
  padding: 15px;
  margin: 0;
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  color: white;
  border-radius: 0 0 14px 14px;
  height: 3%;
}

.Wiki:hover {
  background-color: rgba(0, 123, 255, 0.8);
}

</style>