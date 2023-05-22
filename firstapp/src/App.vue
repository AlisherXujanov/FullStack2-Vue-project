<script setup>

const user = JSON.parse(localStorage.getItem('user'))
function logout(){
  localStorage.removeItem('user')
  window.location.reload()
}

</script>

<template>
  <header>
    <notifications position="top center"  />
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
