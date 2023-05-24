<template>
  <div class="card-details">
    <img :src="getImg" />
    <span v-if="card.favorite" class="favorite" > ♥ </span>
    <h1>{{ card.title }}</h1>
    <p>{{ card.content }}</p>
    <p>
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolores, aut error quam minima ipsum
      consequatur accusantium numquam hic? Assumenda magni adipisci debitis libero, quo culpa! Sunt
      at voluptatem odit dicta, est ducimus esse architecto doloribus adipisci fugiat, perspiciatis
      dolores eaque quam, vero ullam a quod hic repudiandae! Asperiores consectetur veniam quos
      voluptates. Totam soluta eos dolorum quidem inventore est iste asperiores possimus perferendis
      ducimus ullam odit ratione excepturi similique enim, necessitatibus, veniam nihil aliquam sed,
      dolor accusamus repudiandae expedita unde. Placeat exercitationem eveniet optio eum sit
      accusantium cupiditate id tempora ad, magni autem non corrupti ullam, quo iure vitae enim?
    </p>
    <button class="thumb-up" style="float: left" @click='toggleFavorite(card.id)'>
      👍🏻
    </button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      currentCardId: Number(this.$route.params.code),
      cards: [
        { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 2, title: 'Card 2', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 3, title: 'Card 3', content: 'Lorem ipsum dolor sit amet...', favorite: true },
        { id: 4, title: 'Card 4', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 5, title: 'Card 5', content: 'Lorem ipsum dolor sit amet...', favorite: true },
        { id: 6, title: 'Card 6', content: 'Lorem ipsum dolor sit amet...', favorite: false }
      ]
    }
  },
  computed: {
    card() {
      return this.cards.filter((c) => c.id === this.currentCardId)[0]
    },
    getImg() {
      // This is vite configuration to get the image path
      // in Vue we could use require.context
      // but in vite we can't use it
      // so we use this method to get the image path
      return new URL(`../../assets/card_images/img${this.currentCardId}.jpg`, import.meta.url).href
    }
  },
  methods: {
    toggleFavorite(card_id) {
      const card = this.cards.find(card => card.id === card_id)
      card.favorite = !card.favorite
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
  overflow: hidden;
  background: linear-gradient(90deg, #00c9ff 0%, #92fe9d 100%);
  position: relative;

  h1 {
    color: red;
  }
  img {
    width: 100%;
    height: 400px;
  }
  .favorite {
    position: absolute;
    top: 0;
    right: 5%;
    font-size: 3rem;
    text-shadow: 2px 2px 10px red, -2px -2px 10px red;
    color: red;
  }
  .thumb-up {
    border: none;
    outline: none;
    padding: 2px;
    font-size: 1.3em;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 5px;
    cursor: pointer;
    transition: 0.3s;
  }
  .thumb-up:hover {
    background-color: lightgray;
  }
  .thumb-up:active {
    background-color: green;
  }
}
</style>