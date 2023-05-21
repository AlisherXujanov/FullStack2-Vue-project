<template >
  <div class="registration-form">
    <h1>Регистрация</h1>
    <form class="form-group">
      <div>
        <input type="text" id="name-input" placeholder="Введите никнейм" />
        <input
          type="text"
          id="name-input"
          placeholder="Электронная почта"
          pattern="^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$"
        />
      </div>
      <div>
        <input
          id="pass-input"
          placeholder="Придумайте пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
      </div>
      <div>
        <input
          id="pass-input"
          placeholder="Повторите пароль"
          pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}"
        />
      </div>
      <button class="войти" :onclick="(e) => register(e)">Создать аккаунт</button>
    </form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      msg: 'Hello from Register view'
    }
  },
  methods: {
    register(e) {
      e.preventDefault()
      console.log('Registration')
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