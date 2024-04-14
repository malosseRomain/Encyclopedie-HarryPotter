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
  <li class="characters-item">
    <img v-if="itemProps.attributes.image" :src="itemProps.attributes.image" :alt="'Image du personnage : ' + itemProps.attributes.name"/>
    <img v-else :src="defaultImageURL" alt="Image par défaut de potion" />
    
    <div class="characters-details">
      <p><strong>Nom : </strong>{{ itemProps.attributes.name || "N/A"}}</p>
      <p><strong>Maison : </strong>{{ itemProps.attributes.house || "N/A"}}</p>
      <p><strong>Date et lieu de naissance : </strong> {{ itemProps.attributes.born || "N/A"}}</p>
      <a :href="itemProps.attributes.wiki">
        <p class="Wiki">En savoir plus avec le wiki</p>
      </a>
    </div>
  </li>
</template>



<style scoped>
.characters-item {
  display: block;
  background-color: rgb(241, 237, 237, 0.9);
  width: 100%;
  height: 900px;
  border: 10px double #4c8a3c;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 60%;
    border-radius: 15px;
    margin-top: 40px;
    max-width: 100%;
  }
}

.characters-details {
  height: 30%;
  color: black;

  & > p {
    overflow: auto;
    border-bottom: 3px solid #000000;
    height: 17%;
    padding: 10px 30px;
    margin-top: 20px;
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
