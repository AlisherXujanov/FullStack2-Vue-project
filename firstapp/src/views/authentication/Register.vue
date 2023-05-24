<template >
  <div class="registration-form">
    <h1>Регистрация</h1>
    <form class="form-group">
      <div>
        <input type="text" id="name-input" v-model="username" placeholder="Введите никнейм" />
        <input
          type="email"
          id="email-input"
          v-model="email"
          placeholder="Электронная почта"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
      </div>
      <div>
        <input
          type="password"
          id="pass-input"
          v-model="password"
          placeholder="Придумайте пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
      </div>
      <div>
        <input
          type="password"
          id="pass2-input"
          v-model="password2"
          placeholder="Повторите пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
      </div>
      <button class="войти" @click="(e) => register(e)">Создать аккаунт</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      username: '',
      email: '',
      password: '',
      password2: ''
    }
  },
  created() {
    if (localStorage.getItem('user')) {
      this.$router.push('/')
    }
  },
  methods: {
    register(e) {
      e.preventDefault()
      if (!this.isValid()) {
        this.$notify({
          title: 'Проверьте правильность введенных данных',
          type: 'error'
        })
        return
      }
      // We save all information into localStorage
      let user = {
        username: this.username,
        email: this.email,
        password: this.password
      }
      localStorage.setItem('user', JSON.stringify(user))
      localStorage.setItem('login-credentials', JSON.stringify(user))
      // -----------------------------------------------
      this.clearForm()
      this.$notify({
        title: 'Регистрация прошла успешно',
        type: 'success'
      })
      this.$router
        .push('/')
        .then(() => { this.$router.go() })
    },
    isValid() {
      if (this.username.length < 2) {
        return false
      }
      if (this.password.length < 5) {
        return false
      }
      if (this.password !== this.password2) {
        return false
      }
      return true
    },
    clearForm() {
      this.username = ''
      this.email = ''
      this.password = ''
      this.password2 = ''
    }
  }
}
</script>
<style lang="scss" scoped>
.registration-form {
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
@media (max-width: 700px) {
  .registration-form {
    height: 60vh;
    margin-top: 30%;

    .form-group {
      width: 80%;

      input {
        width: 100%;
      }
    }
  }
}
</style>