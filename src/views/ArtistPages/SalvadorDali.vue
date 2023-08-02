<template>
    <main>
    <h1>MESSI IN SALVADOR DALI'S UNIVERSE</h1>

    <ul>
      <li v-for="artist in dali" :key="artist.id">
        <img v-for="image in artist.image" :src="image" alt="">
      </li>
    </ul>
  </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const dali = artists.filter((artist) => artist.name === "Salvador Dali");

</script>

<style scoped>

ul{
    list-style-type: none;
}

img{
    width: 25rem;
    height: auto;
}

</style>