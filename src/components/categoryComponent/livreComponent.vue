<script setup>
const props = defineProps({
    item: {
        type: Object,
        required: true
    }
});
</script>

<template>
    <div class="books-item">
        <img v-if="item.attributes.cover" :src="item.attributes.cover" alt="Image du livre" />
        <div class="books-details">
            <p>
                <strong>Nom :</strong> {{ item.attributes.title || "N/A" }}
            </p>
            <p>
                <strong>Nombre de page :</strong> {{ item.attributes.pages || "N/A" }}
            </p>
            <p>
                <strong>Date de sortie :</strong> {{ new Date(item.attributes.release_date).toLocaleDateString('fr-FR')
            || "N/A" }}
            </p>
            <p>
                <strong>Créateur :</strong> {{ item.attributes.author || "N/A" }}
            </p>
            <p class="resume">
                <strong>Résumé :</strong> {{ item.attributes.summary || "N/A" }}
            </p>
        </div>
        <a :href="item.attributes.wiki">
            <p class="Wiki">En savoir plus avec le wiki</p>
        </a>
    </div>
</template>


<style scoped>
.books-item {
    background-color: rgb(241, 237, 237);
    width: 100%;
    border: 10px double #bb2b2b;
    border-radius: 25px;
    transition: transform 0.3s ease-in-out;
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

img {
    width: 100%;
    height: auto;
    border-radius: 15px;
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
}
</style>
