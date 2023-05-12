<template>
  <div class="banner-main">
    <div class="left">
        <img 
            src="assets/icons/star.png" 
            alt="Star image" 
            width="50%" 
            height="80%"
        >
    </div>
    <div class="right">
        <h4>{{ title }}</h4>
        <h2>{{ text }}</h2>
        <button>
            Перейти в кошелёк
        </button>
    </div>
  </div>
</template>

<script>
export default {
    props: [ "title", "text" ],
    data() {
        return {}
    }
}
</script>

<style lang="css" scoped>
.banner-main {
    width: 85%;
    margin: 0 auto;
    background: linear-gradient(to right top, #FAC704, #4B1613);
    border-radius: 25px;
}
</style>>