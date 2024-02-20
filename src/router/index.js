import { createRouter, createWebHistory } from 'vue-router';
import Accueil from '../components/Accueil.vue';
import Potions from '../components/Potions.vue';

const routes = [
  {
    path: '/',
    name: 'accueil',
    component: Accueil,
  },
  {
    path: '/potions',
    name: 'potions',
    component: Potions,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
