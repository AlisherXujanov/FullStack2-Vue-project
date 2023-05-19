<template>
  <div class="card-details">
    <h1>{{ card.title }}</h1>
    <p> {{ card.content }} </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet...' },
        { id: 2, title: 'Card 2', content: 'Lorem ipsum dolor sit amet...' },
        { id: 3, title: 'Card 3', content: 'Lorem ipsum dolor sit amet...' },
        { id: 4, title: 'Card 4', content: 'Lorem ipsum dolor sit amet...' },
        { id: 5, title: 'Card 5', content: 'Lorem ipsum dolor sit amet...' }
      ]
    }
  },
  computed: {
    card() {
      return this.cards.filter((c) => c.id === Number(this.$route.params.code))[0]
    }
  }
}
</script>

<style lang='scss' scoped>

.card-details {
  text-align: center;
  padding: 1rem;
  border-radius: 5px;
  color: snow;
  background: linear-gradient(90deg, #00C9FF 0%, #92FE9D 100%);

  h1 {
    color: red;
  }
}

</style>