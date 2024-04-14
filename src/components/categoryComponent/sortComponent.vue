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
  <li class="spells-item">
    <img v-if="itemProps.attributes.image" :src="itemProps.attributes.image" :alt="'Image du sort : ' + itemProps.attributes.name"/>
    <img v-else :src="defaultImageURL" alt="Image par défaut de sort" />
    
    <div class="spells-details">
        <p><strong>Nom : </strong>{{ itemProps.attributes.name || "N/A"}}</p>
        <p><strong>Catégorie : </strong>{{ itemProps.attributes.category || "N/A"}}</p>
        <p><strong>Effet : </strong>{{ itemProps.attributes.effect || "N/A"}}</p>
        <p><strong>Incantation : </strong>{{ itemProps.attributes.incantation || "N/A"}}</p>
        <p><strong>Lumière : </strong>{{ itemProps.attributes.light || "N/A"}}</p>
        <p><strong>Mouvement de la main : </strong>{{ itemProps.attributes.hand || "N/A"}}</p>
        <a :href="itemProps.attributes.wiki">
            <p class="Wiki">En savoir plus avec le wiki</p>
        </a>
    </div>
  </li>
</template>



<style scoped>
.spells-item {
  display: block;
  background-color: rgb(241, 237, 237, 0.9);
  width: 100%;
  height: 1200px;
  border: 10px double #e2d413;
  border-radius: 25px;
  transition: transform 0.3s ease-in-out;
  position: relative;

  &:hover {
    transform: scale(1.02);
  }

  img {
    height: 55%;
    border-radius: 15px;
    margin-top: 40px;
    max-width: 100%;
  }
}

.spells-details {
  height: 30%;
  color: black;

  & > p {
    overflow: auto;
    border-top: 3px solid #000000;
    height: 8%;
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
