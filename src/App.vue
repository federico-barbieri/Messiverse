<script setup>

</script>

<template>



<header>
    <nav>

      <router-link to="/">HOME</router-link>
      <router-link to="/football">FOOTBALL</router-link>


      <router-link to="/about">ABOUT</router-link>

    </nav>

  
   
  </header>

  <main>

    <section class="main-title">

      <h1>WELCOME TO THE MESSIVERSE</h1>
      <p>Select a universe to discover Messi's random timelines </p>

    </section>

    <section class="secondary-content">

      <p>I am app</p>

      <router-view />
    </section>

   



  </main>



  

 

 
</template>

<style scoped>


</style>
