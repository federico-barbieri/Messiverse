<template>
    <main class="amaral-main">
    <h1>MESSI IN TARSILA DO AMARAL'S UNIVERSE</h1>

    <ul>
      <li v-for="artist in amaral" :key="artist.id">
        <img v-for="image in artist.image" :src="image" alt="">
      </li>
    </ul>
  </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const amaral = artists.filter((artist) => artist.name === "Tarsila Do Amaral");

</script>

<style scoped>

.amaral-main{
    width: 100vw;
    min-height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0rem auto;
}

h1{
    font-size: 3rem;
}



main > ul{
    width: 100%;
    height: 80%;
    list-style-type: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}

img{
    width: 25rem;
    height: auto;
    border-radius: 30px;
    filter: drop-shadow(2px 2px 2px white);
    padding: 1rem;
    transition: all 0.5s ease-in;
}

img:hover{
transform: scale(1.1);
}

</style>