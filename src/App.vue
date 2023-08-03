<script setup>
import Layout from "@/components/Layout.vue";
import { useRoute } from "vue-router";
import { ref, watch } from "vue";


// Get the current route using useRoute()
const route = useRoute();

// Use a ref to track if the current route is the home page
const showHomePage = ref(route.path === '/');

// Use a watcher to update the showHomePage flag when the route changes
watch(() => route.path, (newPath) => {
  showHomePage.value = newPath === '/';
});

</script>

<template>


<Layout>


  <main v-if="showHomePage">

    <Home />

  </main>

  <router-view />



  

 
</Layout>
 
</template>

<style scoped>

</style>
