<template>
    <main class="main-title">
        <h1>WELCOME TO THE MESSIVERSE</h1>
      <p class="select-a-universe">Select a universe to discover Messi's random timelines </p>

      <ul>
        <li v-for="artist in artists" :key="artist.id"><router-link :to="'/' + artist.slug">{{ artist.name }}</router-link></li>
      </ul>

     

     

    </main>
</template>

<script setup>
import data from "../assets/names.json"

const artists = data.artists;



</script>

<style scoped>

h1{
    font-size: 3rem;
}

.select-a-universe{
    font-size: 1.2rem;
}

.main-title{
    width: 100vw;
    height: 80vh;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.main-title > h1{
    font-size: 5rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
}

ul{
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 5rem auto;
    width: 100%;
    height: 50%;
    flex-wrap: wrap;
}

ul > li {
    border: 1px dotted white;
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in;
    font-size: 2rem;
}

ul > li:hover {
    border: 1px dotted black;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
}

</style>