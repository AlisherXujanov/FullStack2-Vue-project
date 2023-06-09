<template>
  <div>
    <div class="section-toggle-btns">
      <button @click="toggleSection('addCard')" :class="section.addCard ? 'active' : ''">
        Add Card
      </button>
      <button @click="toggleSection('cards')" :class="section.cards ? 'active' : ''">Cards</button>
    </div>

    <div class="content">
      <section v-if="section.addCard">
        <div>
          <AddCard @toggleSection='toggleSection' :new-card-id="cards.length + 1" />
        </div>
      </section>
      <section v-else>
        <div class="filter-section">
          <button @click="filterBy('by__date')" :class="filter.by__date ? 'active' : ''">
            By Date
          </button>
          <button @click="filterBy('by__favorite')" :class="filter.by__favorite ? 'active' : ''">
            By Favorite
          </button>
          <button @click="filterBy('default')" :class="filter.default ? 'active' : ''">
            All Cards
          </button>
        </div>

        <div class="cards">
          <Card
            v-for="card in filteredCards"
            :key="card.id"
            :card="card"
            :imgId="card.id"
            @toggle-favorite="toggleFavorite"
            @delete="deleteCard"
            v-slot:default
          >
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Unde, sit eaque quod
              voluptate ipsam adipisci et minus deserunt sequi reprehenderit neque quisquam corrupti
              laudantium corporis rem fuga beatae magnam ad.
            </p>
          </Card>
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Card from '../components/Card/index.vue'
import AddCard from '../components/Card/AddCard.vue'
import axios from 'axios'

export default {
  components: {
    Card,
    AddCard
  },
  data() {
    return {
      cards: [],
      filter: {
        by__date: false,
        by__favorite: false,
        default: true
      },
      section: {
        addCard: false,
        cards: true
      },
      loaded: false
    }
  },
  computed: {
    filteredCards() {
      if (this.loaded) {
        // by date
        if (this.filter.by__date) {
          return this.cards.sort((a, b) => {
            return new Date(a.date) - new Date(b.date)
          })
        }
        // by favorite
        else if (this.filter.by__favorite) {
          return this.cards.filter((card) => card.favorite)
        }
        // default
        else {
          return this.cards.sort((a, b) => {
            return new Date(b.date) - new Date(a.date)
          })
        }
      }
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
  async mounted() {
    // we get the information from the state

    // this.cards = this.$store.state.cards

    await this.getCards()
  },
  methods: {
    redirect() {
      this.$router.push('/login')
    },
    toggleFavorite(card_id) {
      const payload = { card_id }
      this.$store.commit('toggleFavoriteCard', payload)
    },
    filterBy(order) {
      for (const key in this.filter) {
        this.filter[key] = false
      }
      this.filter[order] = true
    },
    toggleSection(section) {
      for (const key in this.section) {
        this.section[key] = false
      }
      this.section[section] = true
    },
    deleteCard(card__id) {
      let card = this.cards.find((card) => card.id === card__id)
      if (confirm(`Are you sure to delete ${card.title}`)) {
        this.cards = this.cards.filter((card) => card.id !== card__id)
        this.$notify({
          title: 'Deleted',
          text: 'Card has been deleted successfully.',
          type: 'success'
        })
      } else {
        this.$notify({
          title: 'Cancelled',
          text: 'Card deletion has been cancelled.',
          type: 'warn'
        })
      }
    },
    async getCards() {
      const url = 'http://localhost:3000/cards'
      this.cards = await axios.get(url).then((res) => res.data)
      if (this.cards.length > 0) {
        this.loaded = true
      }
    }
  }
}
</script>

<style lang='scss' scoped>
.cards {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px;
}

.filter-section {
  display: flex;
  justify-content: end;
  margin: 20px 0;
}
.section-toggle-btns {
  float: left;
}

button {
  padding: 10px;
  border-radius: 5px;
  cursor: pointer;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  font-weight: bold;
  border: 1px solid #ccc;
  background-color: #333;
  color: snow;
  transition: 0.3s;
  margin-left: 5px;

  &:hover {
    background-color: #28a745;
    border: 1px solid #28a745;
    outline: 5px solid rgb(0, 120, 0, 0.5);
  }
  &.active {
    background-color: #28a745;
  }
  &:active {
    background-color: #aaa;
  }
}

@media (max-width: 700px) {
  .cards {
    grid-template-columns: repeat(2, 1fr);
  }
  .section-toggle-btns {
    display: flex;
    justify-content: space-between;
  }
  button {
    width: 50px;
    font-size: 0.8em;
  }
}
@media (max-width: 500px) {
  .cards {
    grid-template-columns: 1fr;
  }
  button {
    width: 40px;
    font-size: 0.6em;
  }
}
</style>