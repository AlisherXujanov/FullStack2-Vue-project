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
          <AddCard @submit="addCard" :new-card-id="cards.length + 1" />
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

export default {
  components: {
    Card,
    AddCard
  },
  data() {
    return {
      cards: [
        {
          id: 1,
          title: 'Card 1',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-20'
        },
        {
          id: 2,
          title: 'Card 2',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-19'
        },
        {
          id: 3,
          title: 'Card 3',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-18'
        },
        {
          id: 4,
          title: 'Card 4',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-17'
        },
        {
          id: 5,
          title: 'Card 5',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-16'
        },
        {
          id: 6,
          title: 'Card 6',
          content: 'Lorem ipsum dolor sit amet...',
          favorite: false,
          date: '2022-10-15'
        }
      ],
      filter: {
        by__date: false,
        by__favorite: false,
        default: true
      },
      section: {
        addCard: false,
        cards: true
      }
    }
  },
  computed: {
    filteredCards() {
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
      const card = this.cards.find((card) => card.id === card_id)
      card.favorite = !card.favorite
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
    addCard(card) {
      if (!card) return
      if (!card.title || !card.content || !card.date) {
        this.$notify({
          title: 'Error',
          text: 'Please fill all the fields.',
          type: 'error'
        })
        return
      } else {
        this.$notify({
          title: `Created - ${card.title} - card`,
          text: 'Card has been added successfully.',
          type: 'success'
        })
        this.cards.push(card)
        this.toggleSection('cards')
      }
    },
    deleteCard(card__id) {
      let card = this.cards.find(card => card.id === card__id)
      if (confirm(`Are you sure to delete ${card.title}`)) {
        this.cards = this.cards.filter(card =>  card.id  !==  card__id)
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