<script setup>
import { ref, computed } from 'vue'
import Person from '../components/Person.vue'

// IMPORTS
// --------------------------------------------------------------------------------------------

const people = [
  { name: 'John', age: 30, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John2', age: 35, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John3', age: 25, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John4', age: 15, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' },
  { name: 'John5', age: 22, number: '90 123 4567', info: 'Lorem ipsum dolor sit amet...' }
]

// DATA
// --------------------------------------------------------------------------------------------

let selectedPerson = ref('')
const selectPerson = (person) => {
  selectedPerson.value = person
  searchTerm.value = ''
}
// SELECTED PERSON
// --------------------------------------------------------------------------------------------

let searchTerm = ref('')
const searchPeople = computed(() => {
  if (searchTerm.value === '') {
    return []
  }
  let matches = 0
  return people.filter((person) => {
    if (person.name.toLowerCase().includes(searchTerm.value.toLowerCase()) && matches < 10) {
      matches++
      return person
    }
  })
})
// SEARCH PEOPLE
// --------------------------------------------------------------------------------------------
</script>
<template>
  <div class="about">
    <div>
      <label for="search"> Type the name of a person to search </label>
      <input type="text" id="search" placeholder="Type here..." v-model="searchTerm" />
      <ul v-if="searchPeople.length">
        <li>Showing {{ searchPeople.length }} of {{ people.length }} results</li>
        <li v-for="person in searchPeople" :key="person.name" @click="selectPerson(person.name)">
          {{ person.name }}
        </li>
      </ul>
      <p v-if="selectedPerson">You have selected: {{ selectedPerson }}</p>
    </div>

    <Person v-for="person in people" :key="person.age" :person="person" />
  </div>
</template>

<style scoped>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
