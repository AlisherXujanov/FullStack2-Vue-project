<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">

      <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/cards">Cards</RouterLink>
      </nav>
    </div>

    <div class="router-view">
      <RouterView />
    </div>
  </header>
</template>

<style scoped>
.router-view {
  padding: 10px;
  width: 80%;
  margin: 0 auto;
}
nav {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  background-color: #222;
  color: #fff;
}

nav a {
  color: #fff;
  text-decoration: none;
  padding: 10px 20px;
  font-family: sans-serif;
}
nav a:hover {
  /* make success background-color */
  background-color: #4CAF50; 
  color: #FBFBFB;
}
.router-link-active {
  color: #FBFBFB;
  background-color: #4CAF50;
}
</style>
