<template>
    <div class="cards">
        <Card 
            v-for="card in cards"
            :key="card.id"
            :card="card"
        />
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
                {id: 1, title: 'Card 1', content: 'Lorem ipsum dolor sit amet...'},
                {id: 2, title: 'Card 2', content: 'Lorem ipsum dolor sit amet...'},
                {id: 3, title: 'Card 3', content: 'Lorem ipsum dolor sit amet...'},
                {id: 4, title: 'Card 4', content: 'Lorem ipsum dolor sit amet...'},
                {id: 5, title: 'Card 5', content: 'Lorem ipsum dolor sit amet...'},
            ]
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