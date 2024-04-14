<script setup>
const props = defineProps({
    itemProps: {
        type: Object,
        required: true
    }
});


const convertDate = (date) => {
    return new Date(date).toLocaleDateString('fr-FR');
} 
</script>

<template>
    <li class="books-item">
        <img v-if="itemProps.attributes.cover" :src="itemProps.attributes.cover" :alt="'Image du livre : ' + itemProps.attributes.name" />
        <div class="books-details">
            <p><strong>Nom :</strong> {{ itemProps.attributes.title || "N/A" }}</p>
            <p><strong>Nombre de page :</strong> {{ itemProps.attributes.pages || "N/A" }}</p>
            <p><strong>Date de sortie :</strong> {{ convertDate(itemProps.attributes.release_date) || "N/A" }}</p>
            <p><strong>Créateur :</strong> {{ itemProps.attributes.author || "N/A" }}</p>
            <p class="resume"><strong>Résumé :</strong> {{ itemProps.attributes.summary || "N/A" }}</p>
        </div>
        <a :href="itemProps.attributes.wiki">
            <p class="Wiki">En savoir plus avec le wiki</p>
        </a>
    </li>
</template>


<style scoped>
.books-item {
    background-color: rgb(241, 237, 237);
    width: 100%;
    border: 10px double #bb2b2b;
    border-radius: 25px;
    transition: transform 0.3s ease-in-out;

    &:hover {
        transform: scale(1.02);
    }

    img {
        width: 100%;
        height: auto;
        border-radius: 15px;
    }
}


.books-details {
    height: 400px;
    color: black;

    p {
        border-bottom: 3px solid #000000;
        padding-bottom: 20px;
        padding-right: 20px;
        padding-left: 20px;
    }
}


.resume {
    padding-bottom: 20px;
    padding-right: 20px;
    padding-left: 20px;
    text-align: justify;
    overflow: auto;
    height: 32%;
}


a {
    text-decoration: none;
    color: white;

    .Wiki {
        background-color: rgba(0, 123, 255, 1);
        padding: 15px;
        margin: 0;
        border-radius: 0 0 15px 15px;
    }

    .Wiki:hover {
        background-color: rgba(0, 123, 255, 0.8);
    }
}
</style>
