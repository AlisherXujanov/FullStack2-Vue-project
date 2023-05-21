<script setup>
import { RouterLink, RouterView } from 'vue-router'
</script>

<template>
  <header>
    <div class="wrapper">
      <nav>
        <div class="left">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/cards">Cards</RouterLink>
          <RouterLink to="/customers">Customers</RouterLink>
        </div>
        <div class="right">
          <RouterLink to="/login">Login</RouterLink>
          <RouterLink to="/register">Register</RouterLink>
        </div>
      </nav>
    </div>

    <div class="router-view">
      <RouterView />
    </div>
  </header>
</template>

<style lang='scss' scoped>
.router-view {
  padding: 10px;
  width: 80%;
  margin: 0 auto;
}
nav {
  display: flex;
  justify-content: space-between;
  background-color: #222;
  color: #fff;

  a {
    color: #fff;
    text-decoration: none;
    padding: 10px 20px;
    font-family: sans-serif;
    display: inline-block;

    &:hover {
      background-color: #4caf50;
      color: #fbfbfb;
    }
  }
}

.router-link-active {
  color: #fbfbfb;
  background-color: #4caf50;
}

@media (max-width: 500px) {
  nav {
    flex-direction: column;
    margin-bottom: 20px;
  }
  .left {
    display: flex;
    flex-direction: column;
  }
  .right {
    display: flex;
    flex-direction: column;
  }
}
</style>
