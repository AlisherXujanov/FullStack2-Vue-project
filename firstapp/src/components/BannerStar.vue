<template>
  <div class="banner-main">
    <div class="left">
      <img
        src="../assets/icons/star.png"
        alt="Star image"
        width="200px"
        height="200px"
      />
    </div>
    <div class="right">
      <h4>{{ title }}</h4>
      <h2>{{ text }}</h2>
      <button>Перейти в кошелёк</button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["title", "text"],
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
@import url("https://fonts.googleapis.com/css2?family=Roboto:wght@300&display=swap");
@import "../assets/css/variables.scss";

.banner-main {
  width: 85%;
  height: 450px;
  margin: 0 auto;
  background: linear-gradient(to right top, #4b1613, $yellow);
  border-radius: 25px;
  font-size: 1.5em;
  color: snow;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 100px;
  font-family: "Roboto", sans-serif;

  .right {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: end;
    text-align: right;
  }

  button {
    border: snow solid 3px;
    padding: 15px 35px;
    color: snow;
    background-color: rgb($yellow, 0.1);
    font-size: 1em;
  }
}
h2 {
  margin: 50px 0;
}
h4 {
  font-size: 1.2em;
  font-weight: 500;
}
</style>>