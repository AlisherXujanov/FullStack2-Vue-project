<template >
  <div class="login-form">
    <h1>Вход</h1>
    <form class="form-group">
      <input type="text" placeholder="Логин" v-model="username" />
      <input type="password" placeholder="Пароль" v-model="password" />
      <button class="войти" @click="(e) => login(e)">Войти</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      password: ''
    }
  },
  created() {
    if (localStorage.getItem('user')) {
      this.$router.push('/')
    }
  },
  methods: {
    login(e) {
      e.preventDefault()
      let loginCredentials = JSON.parse(localStorage.getItem('login-credentials'))
      if (this.username == loginCredentials.username && this.password == loginCredentials.password) {
        localStorage.setItem('user', JSON.stringify(loginCredentials))
        this.$notify({
          title: "Успешный вход!",
          text: "Вы успешно вошли в систему.",
          type: 'success',
        });
        this.$router
          .push('/')
          .then(() => { this.$router.go() })
      } else {
        this.$notify({
          title: "Неверный логин или пароль!",
          text: "Пожалуйста, введите правильный логин и пароль.",
          type: 'error',
        });
      }
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