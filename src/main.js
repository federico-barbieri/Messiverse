import './assets/main.css'

import { createApp } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'
import App from './App.vue'
import Football from "./components/Football.vue"
import AboutPage from "./components/AboutPage.vue"

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {path: '/football', component: Football},
        {path: '/about', component: AboutPage},
    ],
    
});



const app = createApp(App)

app.use(router);

app.mount('#app')
