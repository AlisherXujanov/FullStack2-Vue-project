<template>
  <div class="cards">
    <Card 
      v-for="card in cards" 
      :key="card.id" 
      :card="card" 
      :imgId="card.id"
      @toggle-favorite="toggleFavorite"
      v-slot:default
    >
      <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sit eaque quod voluptate ipsam adipisci et minus deserunt sequi reprehenderit neque quisquam corrupti laudantium corporis rem fuga beatae magnam ad.</p>
    </Card>
  </div>
</template>

<script>
import Card from '../components/Card/index.vue'

export default {
  components: {
    Card
  },
  data() {
    return {
      cards: [
        { id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 2, title: 'Card 2', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 3, title: 'Card 3', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 4, title: 'Card 4', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 5, title: 'Card 5', content: 'Lorem ipsum dolor sit amet...', favorite: false },
        { id: 6, title: 'Card 6', content: 'Lorem ipsum dolor sit amet...', favorite: false },
      ]
    }
  },
  created() {
    // redirect to login page if user is not authenticated
    // check using local storage
    if (!localStorage.getItem('user')) {
      this.$notify({
        title: 'You are not logged in!',
        text: 'Please login to access the content.',
        type: 'error'
      })
      this.redirect()
    }
  },
  methods: {
    redirect() {
      this.$router.push('/login')
    },
    toggleFavorite(card_id) {
      const card = this.cards.find(card => card.id === card_id)
      card.favorite = !card.favorite
    }
  }
}
</script>

<style scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
}
</style>