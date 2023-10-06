<template>
    <main class="magritte-main">
      <div class="main-title">
        <h1>MESSI IN RENE MAGRITTE'S UNIVERSE</h1>
      </div>

      <div class="gallery">

        <ul>
          <li v-for="index in magritte.image.length" :key="index" class="img-span-li">
            
            <div class="img-wrapper" :style="{ order: index % 2 === 0 ? '2' : '1' }">
              <img :src="magritte.image[index - 1]" :alt="magritte.imageTitle[index - 1]" />
            </div>
            
            <div class="text-div" :style="{ order: index % 2 === 0 ? '1' : '2' }">
              <span class="picture-title"><strong>{{ (magritte.imageTitle[index - 1]).toUpperCase() }}</strong></span>
              <span class="picture-description"><em>{{ magritte.imageDescription[index - 1] }}</em></span>
            </div>
          </li>
        </ul>


      </div>

    
  </main>
</template>

<script setup>
import data from "../../assets/names.json";

const artists = data.artists;

const magritte = artists.find((artist) => artist.name === "Rene Magritte");

</script>

<style scoped>

/* main title */

.main-title{
    width: 100vw;
    height: 90vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0rem auto;
}

h1{
    font-size: 4rem;
    display: block;
    margin: 0 auto;
    padding: 1rem;
    text-align: center;
}

/* gallery */

.gallery{
    max-width: 90vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-around;
    margin: 0 auto;
}


main > ul{
    max-width: 90%;
    height: auto;
    list-style-type: none;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;
    padding: 1rem;
}

ul{
  padding-inline-start: 0;
}

.img-span-li{
  max-width: 100%;
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
  align-items: center;
  justify-content: center;
  text-align: left;
  padding: 1rem;

}

.picture-title{
  margin-bottom: 1rem;
  text-decoration: underline;
  font-size: 2rem;
}

.picture-description{
  font-size: 1.2rem;
  max-width: 80%;
  text-align: left;
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

/* Tablet Styles */
@media screen and (min-width: 768px) and (max-width: 1300px) {

      /* main title */

      .main-title{
          width: 100vw;
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin: 0rem auto;
      }

      h1{
          font-size: 4rem;
          display: block;
          margin: 0 auto;
          padding: 1rem;
          text-align: center;
      }

      /* gallery */

      .gallery{
          max-width: 90vw;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto;
      }


      main > ul{
          max-width: 90%;
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
        max-width: 80%;
        height: auto;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 1rem;
        border: 1px solid black;
        margin: 2rem auto;
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
        text-align: left;
        padding: 1rem;

      }

      .picture-title{
        margin-bottom: 1rem;
        text-decoration: underline;
        font-size: 1.5rem;
        flex-wrap: nowrap;
      }

      .picture-description{
        font-size: 1rem;
        max-width: 100%;
        text-align: left;
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


/* Mobile Styles */
@media screen and (max-width: 767px) {

     /* main title */

     .main-title{
          width: 100vw;
          height: 90vh;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin: 0rem auto;
      }

      h1{
          font-size: 3rem;
          display: block;
          margin: 0 auto;
          padding: 1rem;
          text-align: center;
      }

      /* gallery */

      .gallery{
          max-width: 100vw;
          height: auto;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: space-around;
          margin: 0 auto;
      }


      main > ul{
          max-width: 100%;
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
        margin: 2rem 1rem;
        border-top-right-radius: 30px;
        border-top-left-radius: 30px;

      }


      .img-span-li:nth-child(odd) .text-div{
          order: 1;
      }

      .img-span-li:nth-child(even) .text-div{
          order: 2;
      }

      .text-div{
        max-width: 100%;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: left;
        padding: 1rem;
        margin: 0 auto;

      }

      .picture-title{
        margin-bottom: 1rem;
        text-decoration: underline;
        font-size: 1.5rem;
        flex-wrap: nowrap;
      }

      .picture-description{
        font-size: 1rem;
        max-width: 100%;
        text-align: left;
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
