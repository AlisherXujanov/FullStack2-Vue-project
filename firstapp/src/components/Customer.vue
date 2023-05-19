<template>
  <div class="customer">
    <h1>{{ customer.name }}</h1>
    <p>{{ customer.age }}</p>
    <p>{{ customer.info }}</p>
    <p>{{ customer.number }}</p>
  </div>
</template>

<script>
export default {
  props: {
    customer: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
.customer {
  background-color: gray;
  color: snow;
  border-radius: 10px;
  margin-top: 10px;
  padding: 10px;
}
</style>