<template>
    <main class="michelangelo-main">
          <div class="main-title">
                    <h1 id="mainTitle">MESSI IN MICHELANGELO'S UNIVERSE</h1>
          </div>

          <div class="grid">
                <ul>
                      <li v-for="index in michelangelo.image.length" :key="index" class="img-span-li">
                          <div class="img-wrapper" :style="{ order: index % 2 === 0 ? '2' : '1' }">
                              <img :src="michelangelo.image[index - 1]" :alt="michelangelo.imageTitle[index - 1]" />
                          </div>
                          <div class="text-div" :style="{ order: index % 2 === 0 ? '1' : '2' }">
                               <span class="picture-title"><strong>{{ (michelangelo.imageTitle[index - 1]).toUpperCase() }}</strong></span>
                                <span class="picture-description"><em>{{ michelangelo.imageDescription[index - 1] }}</em></span>
                          </div>
                      </li>
                  </ul>
            </div>
            <a href="#mainTitle" class="green">Back to top</a>

     </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const michelangelo = artists.find((artist) => artist.name === "Michelangelo");

</script>

<style scoped>

.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 1rem;
  width: 100%;
  display: block;
  height: 5vh;
  text-align: center;
  margin: 2rem auto;
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
  flex-wrap: nowrap;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem;
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
  align-items: center;
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
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    object-position: center;
}


@media screen and (max-width:1300px){

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
        max-width: 100%;
        height: auto;
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid black;
        margin: 2rem 0rem;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;
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
    height: 100%;
    border-radius: 50%;
    object-fit: cover;
    border-top-right-radius: 30px;
    border-top-left-radius: 30px;
    object-position: center;
}
}

</style>