import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import AboutPage from "./views/AboutPage.vue"
import Home from "./views/Home.vue"
import SalvadorDali from "./views/ArtistPages/SalvadorDali.vue"
import PabloPicasso from "./views/ArtistPages/PabloPicasso.vue"
import Bosch from "./views/ArtistPages/Bosch.vue"
import Magritte from "./views/ArtistPages/Magritte.vue"
import Amaral from "./views/ArtistPages/Amaral.vue"
import Mondrian from "./views/ArtistPages/Mondrian.vue"
import Michelangelo from "./views/ArtistPages/Michelangelo.vue"
import Kandinsky from "./views/ArtistPages/Kandinsky.vue"
import Szukalski from "./views/ArtistPages/Szukalski.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/', component: Home},
        {path: '/about', component: AboutPage},
        {path: '/dali', component: SalvadorDali},
        {path: '/picasso', component: PabloPicasso},
        {path: '/bosch', component: Bosch},
        {path: '/magritte', component: Magritte},
        {path: '/doamaral', component: Amaral},
        {path: '/mondrian', component: Mondrian},
        {path: '/michelangelo', component: Michelangelo},
        {path: '/kandinsky', component: Kandinsky},
        {path: '/szukalski', component: Szukalski},
    ],
    
});



const app = createApp(App)

app.use(router);

app.mount('#app')
