<template>
  <header>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/football">FOOTBALL</router-link>
      <router-link to="/about">ABOUT</router-link>
      <span>CART({{ cartStore.getCount }})</span>
      <button @click="showMeTheCart">show cart</button>
    </nav>
  </header>
  <main>
    <Cart v-show="showCart" @closeWithEmitEvent="consoling"/>
    <slot />
  </main>
</template>

<script setup>
import { useCartStore } from '../stores/CartStore';
import Cart from "./Cart.vue"
import { ref } from 'vue';

const cartStore = useCartStore();
let showCart = ref(false); // Use the ref function to create a reactive property

function showMeTheCart(){
  showCart.value = true;
}

function consoling(){
showCart.value = false;
}
</script>

<style scoped>
/* Your styles here */
</style>
