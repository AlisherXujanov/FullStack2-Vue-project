<template >
  <div class="login-form">
    <h1>Вход</h1>
    <form class="form-group">
      <input type="text" placeholder="Логин" />
      <input type="password" placeholder="Пароль" />
      <button class="войти" :onclick="(e) => login(e)">Войти</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello from Login view'
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      console.log('Login')
    }
  }
}
</script>
<style lang="scss" scoped>
.login-form {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 80vh;

  .form-group {
    display: flex;
    flex-direction: column;
    width: 50%;
    margin: 0 auto;
    padding: 30px;

    input,
    button {
      margin-bottom: 10px;
      width: 100%;
      padding: 10px 20px;
      border-radius: 5px;
      background-color: #ccc;
      outline: none;
      border: none;
    }
    input:focus {
      background-color: snow;
    }
    button {
      background-color: darkgreen;
      color: snow;

      &:hover {
        cursor: pointer;
        background-color: green;
      }
    }
  }
}
@media (max-width: 750px) {
  .login-form {
    height: 60vh;
    margin-top: 15%;

    .form-group {
      width: 80%;

      input {
        width: 100%;
      }
    }
  }
}
</style>