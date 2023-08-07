<template>
    <header>
    <nav>

      <router-link to="/">HOME</router-link>
      <router-link to="/football">FOOTBALL</router-link>


      <router-link to="/about">ABOUT</router-link>

      <span>CART({{ cartStore.getCount }})</span>

    </nav>

  
   
  </header>
<main>

    <slot/>

</main>
 
</template>

<script setup>

import { useCartStore } from '../stores/CartStore';

const cartStore = useCartStore();

</script>

<style lang="scss" scoped>

</style>