<template>
    <main class="modigliani-main">
    <h1>MESSI IN AMADEO MODIGLIANI'S UNIVERSE</h1>

    <ul>
      <li v-for="index in modigliani.image.length" :key="index" class="img-span-li">
        <div class="img-wrapper">
          <img :src="modigliani.image[index - 1]" :alt="modigliani.imageTitle[index - 1]" />

        </div>
        <div class="text-div">
        <span class="picture-title"><strong>{{ (modigliani.imageTitle[index - 1]).toUpperCase() }}</strong></span>
        <span class="picture-description"><em>{{ modigliani.imageDescription[index - 1] }}</em></span>
      </div>
      </li>
    </ul>
  </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const amaral = artists.find((artist) => artist.name === "Amadeo Modigliani");

</script>

<style scoped>

.modigliani-main{
    width: 95vw;
    height: auto;
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
    width: 90%;
    height: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
}

.img-span-li{
  width: 100%;
  height: auto;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid white;
}

.text-div{
  max-width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
}



.picture-title{
  margin-bottom: 1rem;
  text-decoration: underline;
  font-size: 2rem;
}

.picture-description{
  font-size: 1.2rem;
  max-width: 80%;
}

.img-wrapper{
  max-width: 50%;
}


img{
    max-width: 100%;
    height: auto;
    border-radius: 30px;
    filter: drop-shadow(2px 2px 2px white);
    padding: 1rem;
    transition: all 0.5s ease-in;
}


</style>