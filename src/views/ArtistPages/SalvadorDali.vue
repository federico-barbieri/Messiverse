<template>
    <main>
        <div class="main-title">

            <h1>MESSI IN SALVADOR DALI'S UNIVERSE</h1>

        </div>

        <div class="grid">

            <ul>
              <li v-for="index in dali.image.length" :key="index" class="img-span-li">
                <div class="img-wrapper" :style="{ order: index % 2 === 0 ? '2' : '1' }">
                  <img :src="dali.image[index - 1]" :alt="dali.imageTitle[index - 1]" />

                </div>
                <div class="text-div" :style="{ order: index % 2 === 0 ? '1' : '2' }">
                  <span class="picture-title"><strong>{{ (dali.imageTitle[index - 1]).toUpperCase() }}</strong></span>
                  <span class="picture-description"><em>{{ dali.imageDescription[index - 1] }}</em></span>
                </div>
              </li>
            </ul>

        </div>
  </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const dali = artists.find((artist) => artist.name === "Salvador Dali");

</script>

<style scoped>

.main-title{
  width: 100vw;
    height: 80vh;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

h1{
    font-size: 3rem;
}

.grid{
    width: 80vw;
    height: auto;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}


.grid > ul{
    width: 100%;
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

.img-span-li:nth-child(odd) .text-div{
    order: 1;
}

.img-span-li:nth-child(even) .text-div{
    order: 2;
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

@media screen and (min-width: 768px) and (max-width: 1300px) {

.main-title{
  width: 80vw;
    height: 80vh;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
}

h1{
    font-size: 2rem;
}

.grid{
    width: 80vw;
    height: auto;
    border: 1px solid white;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}


.grid > ul{
    width: 100%;
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

.img-span-li:nth-child(odd) .text-div{
    order: 1;
}

.img-span-li:nth-child(even) .text-div{
    order: 2;
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
}


@media screen and (max-width: 767px){

.main-title{
  width: 100vw;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    text-align: center;
    padding: 1rem;
    border: none;
}

h1{
    font-size: 2rem;
}

.grid{
    width: 100vw;
    height: auto;
    border: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}


.grid > ul{
    width: 100%;
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
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
  border: 1px solid white;
}

.img-span-li:nth-child(odd) .text-div{
    order: 1 !important;
}

.img-span-li:nth-child(even) .text-div{
    order: 1 !important;
}

.text-div{
  max-width: 100%;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 1rem;
}



.picture-title{
  margin-bottom: 1rem;
  text-decoration: underline;
  font-size: 1.5rem;
}

.picture-description{
  font-size: 1rem;
  max-width: 100%;
}

.img-wrapper{
  max-width: 100%;
}


img{
    max-width: 100%;
    height: auto;
    border-radius: 30px;
    filter: drop-shadow(2px 2px 2px white);
    padding: 1rem;
    transition: all 0.5s ease-in;
}
}


</style>