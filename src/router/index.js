// fichier router/index.js ou un nom similaire
import { createRouter, createWebHistory } from 'vue-router';
import PotionsPage from '../components/Potions.vue'; // Assurez-vous que le chemin est correct

const routes = [
  {
    path: '/',
    name: 'Acceuil',
    component: Home
  },
  {
    path: '/potions',
    name: 'potions',
    component: PotionsPage,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
