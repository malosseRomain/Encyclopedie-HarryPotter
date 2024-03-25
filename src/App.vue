<script setup>
import { ref } from 'vue'

const liens = ref([
  { title: 'Potions', route: '/Potions' },
  { title: 'Sorts', route: '/Sorts' },
  { title: 'Livres', route: '/Livres' },
  { title: 'Personnages', route: '/Personnages' }
])

const backgroundImg = new URL('DefaultImg/castleBackground.jpg', import.meta.url).href;

const setBackgroundImage = (event) => {
  event.target.src = backgroundImg;
};

const accueil = ref({ title: 'Accueil', route: '/' })
</script>

<template>
  <div class="background-image">
    <header>
      <div><router-link :to='accueil.route'>{{ accueil.title }}</router-link></div>

      <ul>
        <li v-for="(lien, index) in liens" :key="index">
          <router-link :to='lien.route'>{{ lien.title }}</router-link>
        </li>
      </ul>
    </header>

    <!-- Contenu de la page -->
    <router-view />
  </div>
</template>

<style scoped>
.background-image {
  top: 0;
  left: 0;
  height: 100vh; /* 100% de la hauteur de la fenêtre */
  z-index: -1;
  background-image: url("DefaultImg/castleBackground.jpg");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
}



header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  display: flex;
  padding: 1rem 2rem;
  background-color: var(--header-background, #cfc8c8);
  z-index: 1;
}

header div,
header ul {
  display: flex;
}

header div {
  margin-right: auto;
}

ul {
  list-style-type: none;
  margin: 0;
  margin-right: 60px;
}

ul li {
  margin-left: 1rem;
}

a {
  color: var(--link-color, #646cff);
  text-decoration: none;
  transition: color 0.3s;
}

a:hover {
  color: var(--link-hover-color, #535bf2);
}
</style>
