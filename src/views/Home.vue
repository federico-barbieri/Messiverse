<template>
    <main>
        <div class="main-title">

            <h1>WELCOME TO THE MESSIVERSE</h1>
            <p class="select-a-universe">Select a universe to discover Messi's random timelines </p>

        </div>

        <div class="artists">
            <ul>
                <li v-for="artist in artists" :key="artist.id"><router-link :to="'/' + artist.slug">{{ artist.name }}</router-link></li>
            </ul>

        </div>   
    </main>
</template>

<script setup>
import data from "../assets/names.json"

const artists = data.artists;



</script>

<style scoped>

/* main title */


.main-title{
    width: 100vw;
    height: 80vh;
    border: 1px solid white;
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
    max-width: 80%;
    height: 50%;
    flex-wrap: wrap;
    padding-inline-start: 0;

}

ul > li {
    border: 1px solid white;
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in;
    font-size: 2rem;
    display: block;
    width: 60%;
    margin: 2rem auto;
    text-align: center;
}

ul > li:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
}

/* Tablet Styles */
@media screen and (min-width: 768px) and (max-width: 1300px) {

.main-title{
    width: 100vw;
    height: 80vh;
    border: 1px solid white;
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
    border: 1px solid white;
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in;
    font-size: 2rem;
    display: block;
    width: 60%;
    margin: 2rem auto;
    text-align: center;
}

ul > li:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
}
}

@media only screen and (max-width: 700px){
    .main-title{
    width: 90vw;
    margin: 2rem auto;
    height: 100vh;
    border: 1px solid white;
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
    border: 1px solid green;
    padding: 1rem;
    }

    ul > li {
    border: 1px solid white;
    padding: 1rem;
    border-radius: 10px;
    transition: all 0.5s ease-in;
    font-size: 1rem;
    margin: 2rem auto;
    }

    ul > li:hover {
    border: 1px solid black;
    background-color: white;
    color: black;
    padding: 1rem;
    border-radius: 10px;
    cursor: pointer;
    }
}

</style>