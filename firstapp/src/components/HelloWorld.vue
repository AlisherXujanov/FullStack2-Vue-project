<template>
  <div>
    {{ message }}
  </div>
</template>

<script>
export default {
  props: [
    "message"
  ],
  data() {
    return {
      msg: "Hello Vue World!",
    };
  }
};
</script>

<style scoped>
div {
  background-color: gray;
  color: snow;
  padding: 20px;
}
</style>
