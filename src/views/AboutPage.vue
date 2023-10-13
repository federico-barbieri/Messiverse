<template>

<main>


<h1>
  About the Project
</h1>

<p>
  Welcome to THE MESSIVERSE. 
  This project explores the fascinating concept of how legendary artists 
  from the past might have depicted Lionel Messi's triumphant moment of winning 
  the World Cup. We delve into the artistic imagination of renowned painters, 
  imagining how they would have recreated this historic event in their own distinct styles.

</p>

  
<h2>
  THE IDEA

</h2>

<p>
  The main inspiration behind this project was to bridge the gap between historical 
  art and contemporary sports, merging two seemingly unrelated worlds into a captivating 
  visual experience. We envisioned the possibility of witnessing Lionel Messi's exceptional 
  talent and World Cup victory through the lenses of iconic artists from different artistic eras.

</p>

<h2>
  THE PROCESS
</h2>

<p>
  To achieve this unique vision, we employed OpenAI's DALL-E, 
  an artificial intelligence model capable of generating impressive visual content 
  from textual prompts. We carefully curated specific prompts tailored to the styles 
  of Salvador Dali, Pablo Picasso, Rene Magritte, Hieronymous Bosch, and Tarsila Do Amaral – 
  five great artists from different periods with distinct approaches to art.

</p>

<h2>
  THE RESULTS

</h2>

<p>
  The result is a series of stunning artworks that embody the essence of each artist's 
  style while immortalizing Lionel Messi's moment of glory on the canvas. 
  From Dali's surreal landscapes to Picasso's cubist interpretations, 
  each painting showcases the marriage of sports excellence and artistic genius.

</p>

<h2>
  EXPLORING THE EXHIBITION

</h2>

<p>
  In this digital exhibition, you can browse through each artist's 
  gallery of Messi's paintings and read inspiring descriptions that 
  accompany the masterpieces. Witness the blend of sportsmanship and artistic 
  brilliance as you navigate through this one-of-a-kind collection.

</p>



</main>
</template>

<script setup>



</script>

<style scoped>

main{
    max-width: 100vw;
    height: auto;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-around;
    margin: 0rem 1rem;
    text-align: left;
}

h1{
    font-size: 3rem;
    margin: 2rem auto;
}

h2{
    font-size: 2rem;
    text-decoration: underline;
    margin: 1rem auto;
}

p{
  font-size: 1.5rem;
  margin: 0 auto 2rem auto;
  max-width: 60ch;
}

@media screen and (max-width: 1300px) {
      main{
        max-width: 100vw;
        height: auto;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: space-around;
        margin: 0rem 1rem 2rem 1rem;
        padding: 1rem;
        text-align: left;
    }
}

@media screen and (max-width: 767px) {
  h1{
    font-size: 2.5rem;
    margin: 2rem auto;
}

h2{
    font-size: 1.5rem;
    text-decoration: underline;
    margin: 1rem auto;
}

p{
  font-size: 1rem;
  margin: 0 auto 2rem auto;
  max-width: 60ch;
}
}


</style>