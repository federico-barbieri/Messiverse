<template>
    <main>
        <div class="main-title">   

            <h1>WELCOME TO THE MESSIVERSE</h1>
            <p class="select-a-universe">A collection of universes where Messi completed football </p>

        </div>

        <div class="artists">

            <ul class="first-row">
                <li v-for="artist in artists.slice(0, 3)" :style="artist.font" :key="artist.id">
                    <router-link :to="'/' + artist.slug">
                       <img class="adjust-img" :src="artist.image[Math.floor(Math.random() * 6)]" :alt="artist.name" :key="artist.id" @mouseenter="hoverIsOn" @mouseleave="!hoverIsOn">
                    </router-link>
                    <p v-if="hoverIsOn">{{artist.name}}</p>

                </li>
            </ul>



            <ul class="second-row">
                <li v-for="artist in artists.slice(3, 6)" :style="artist.font" :key="artist.id">
                    <router-link :to="'/' + artist.slug">
                        <img class="adjust-img" :src="artist.image[Math.floor(Math.random() * 6)]" :alt="artist.name" :key="artist.id">
                    </router-link>
                </li>
            </ul>
            

        </div>   
    </main>
</template>

<script setup>
import data from "../assets/names.json"

import { ref } from "vue";

const artists = data.artists;

const hoverIsOn = ref(false);



</script>

<style scoped>


/* main title */


.main-title{
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
}

.select-a-universe{
    font-size: 1.2rem;
}

h1{
    font-size: 5rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    z-index: 1;
    font-family: 'Montserrat', sans-serif;
}

.artists{
    width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    color: black;
}

.first-row{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0rem auto;
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
    padding-inline-start: 0;
    z-index: 10;
}



.second-row{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0rem auto;
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
    padding-inline-start: 0;
    z-index: 10;
}

ul > li {
    padding: 1rem;
    font-size: 2rem;
    width: 33%;
    height: 100%;
    margin: 0rem auto;
    text-align: center;
    color: black;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;

}

.adjust-img{
    max-width: 100%;
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    object-position: center;
}


/* Tablet Styles */
@media screen and (min-width: 768px) and (max-width: 1300px) {

.main-title{
    width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.select-a-universe{
    font-size: 1.2rem;
}
.main-title > h1{
    font-size: 5rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
}

/* artists */

ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 5rem auto;
    max-width: 100%;
    height: auto;
    flex-wrap: wrap;
    padding-inline-start: 0;

}

ul > li {
    padding: 1rem;
    border-radius: 10px;
    font-size: 2rem;
    display: block;
    width: 60%;
    margin: 2rem auto;
    text-align: center;
}

}

@media only screen and (max-width: 700px){
    .main-title{
    width: 95vw;
    margin: 2rem auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    }

.main-title > h1{
    font-size: 2rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
    
}

.select-a-universe{
    font-size: 1rem;
    margin: 0 auto;
    padding: 1rem;
    width: 100%;
    text-align: center;
}


    ul{
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 5rem auto;
    width: 100%;
    height: auto;
    flex-wrap: nowrap;
    padding: 1rem;
    }

    ul > li {
    padding: 1rem;
    border-radius: 10px;
    font-size: 1.5rem;
    margin: 2rem auto;
    width: 100%;
    }
}

</style>