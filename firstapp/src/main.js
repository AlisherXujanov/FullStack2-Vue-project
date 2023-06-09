import './assets/main.css'

import { createApp } from 'vue'
import { createStore } from 'vuex'
import axios from 'axios'
import App from './App.vue'
import router from './router'
import Notifications from '@kyvg/vue3-notification'


const app = createApp(App)
const store = createStore({
    state() {
        // is the same as data in a component
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
            counter: 0,
            people: [],
            // in the component we call it like:
            // {{ $store.state.counter }}
        }
    },
    getters: {
        // is the same as computed properties in a component
        counterSquared(state) {
            return state.counter * state.counter
            // in the component we call it like:
            // {{ $store.getters.counterSquared }}
        },
        getPeople(state) {
            return state.people
        }
    },
    mutations: {
        // is the same as methods in a component
        increment(state) {
            setTimeout(() => {
                state.counter++
            }, 1000)
            // in the component we call it like:
            // this.$store.commit('increment')
        },
        toggleFavoriteCard(state, { card_id }) {
            const card = state.cards.find((card) => card.id === card_id)
            card.favorite = !card.favorite
        },
        setPeople(state, people) {
            state.people = people
        }
    },
    actions: {
        // is the same as methods in a component
        // the benefit is that we can call mutations from here
        // which helps to run the code in a synchronous way
        // and we can also run async code here.
        increment(context) {
            context.commit('increment')
            // in the component we call it like:
            // this.$store.dispatch('increment')
        },
        async getPeople(context) {
            const url = "http://localhost:3000/people"
            const people = await axios.get(url).then((response) => {
                return response.data
            })
            setTimeout(() => {
                context.commit('setPeople', people)
            }, 1000)
        }
    }
})

app.use(Notifications)
app.use(router)
app.use(store)

app.mount('#app')
