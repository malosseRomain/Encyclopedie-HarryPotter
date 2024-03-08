import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const { URL_ORIGIN } = process.env;


export default defineConfig({
  plugins: [vue()],
  server: {
    // //Permet d'assurer que l'accès direct à des routes renvoie à l'accueil pour faire fonctionner le routeur
    // proxy: {
    //   '/': {
    //     target: "http://localhost:5173",
    //     rewrite: (path) => path === '/' ? '/index.html' : path
    //   }
    // }
  }
});
