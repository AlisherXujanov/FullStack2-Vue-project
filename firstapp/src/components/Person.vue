<template>
  <div class="person">
    <h2>{{ person.name }}</h2>
    <p>
      <em>{{ person.info }}</em>
      {{ person.age }} years old!
    </p>
    <footer>
      <small>{{ person.number }}</small>
      <button>Call</button>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Person',
  props: {
    person: {
      type: Object,
      required: true
    }
  },
  data() {
    return {}
  }
}
</script>

<style lang='scss' scoped>
.person {
  background-color: black;
  border-radius: 20px;
  padding: 20px;

  footer {
    display: flex;
    justify-content: space-between;

    button {
      padding: 5px 10px;
      border: none;
    }
  }
}
</style>