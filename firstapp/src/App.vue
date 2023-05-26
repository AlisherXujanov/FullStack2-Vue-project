<script setup>
import { notify } from "@kyvg/vue3-notification";
import router from './router'
import { provide } from 'vue'


const user = JSON.parse(localStorage.getItem('user'))
const people = [
  { name: 'John', age: 30, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Aragorn', age: 35, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Mathilda', age: 25, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Argus', age: 15, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Phantom', age: 22, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John 2', age: 30, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Aragorn 2', age: 35, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Mathilda 2', age: 25, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Argus 2', age: 15, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Phantom 2', age: 22, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John 3', age: 30, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Aragorn 3', age: 35, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Mathilda 3', age: 25, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Argus 3', age: 15, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Phantom 3', age: 22, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John 4', age: 30, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Aragorn 4', age: 35, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Mathilda 4', age: 25, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Argus 4', age: 15, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'Phantom 4', age: 22, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
]
provide('people', people)

function logout() {
  localStorage.removeItem('user')
  notify({
    title: 'Logout Success',
    text: 'You have been logged out successfully.',
    type: 'success'
  })
  router.push('/login').then(() => {
    location.reload()
  })
}
</script>

<template>
  <header>
    <notifications position="top center" />
    <div class="wrapper">
      <nav>
        <div class="left">
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/about">About</RouterLink>
          <RouterLink to="/cards">Cards</RouterLink>
          <RouterLink to="/customers">Customers</RouterLink>
        </div>
        <div class="right">
          <div v-if="user">
            <a class="logout" @click="logout">Logout</a>
          </div>
          <div v-else>
            <RouterLink to="/login">Login</RouterLink>
            <RouterLink to="/register">Register</RouterLink>
          </div>
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
    cursor: pointer;

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
