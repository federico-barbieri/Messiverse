<template>
  <header>
    <nav>
      <router-link to="/">HOME</router-link>
      <router-link to="/about">ABOUT</router-link>
    </nav>
  </header>
  <main>
    <slot />
  </main>
</template>

<script setup>


</script>

<style scoped>

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 1rem;
}

</style>
