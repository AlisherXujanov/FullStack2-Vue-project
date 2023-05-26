<script setup>
import { ref, computed, inject } from 'vue'
import Person from '../components/Person.vue'

// IMPORTS
// --------------------------------------------------------------------------------------------


const people = inject('people')
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

function removePerson() {
  selectedPerson.value = ''
}
// REMOVE PERSON
// --------------------------------------------------------------------------------------------

</script>
<template>
  <div class="about">
    <div id="autocomplete">
      <label for="search"> Type the name of a person to search </label>
      <input type="text" id="search" placeholder="Type here..." v-model="searchTerm" />
      <ul v-if="searchPeople.length">
        <li>Showing {{ searchPeople.length }} of {{ people.length }} results</li>
        <li v-for="person in searchPeople" :key="person.name" @click="selectPerson(person.name)">
          {{ person.name }}
        </li>
      </ul>
      <transition>
        <p v-if="selectedPerson">
          You have selected: {{ selectedPerson }}
          <span class="removePerson" @click='removePerson'>❌</span>
        </p>
      </transition>
    </div>

    <div class="people">
      <Person v-for="person in people" :key="person.age" :person="person" />
    </div>
  </div>
</template>

<style lang='scss' scoped>

.about {
  display: grid;
  grid-template-columns: 1fr 3fr;
  gap: 30px;

  .people {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    gap: 10px;
  }
}

#autocomplete {
  display: flex;
  flex-direction: column;
  gap: 10px;

  label { display: block; }
  input {
    padding: 10px;
    border-radius: 5px;
    border: none;
    outline: none;
    background-color: #ccc;

  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    border: 1px solid #ccc;
    border-radius: 5px;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
    max-height: 200px;
    overflow-y: scroll;

    li {
      padding: 10px;
      cursor: pointer;
      transition: 0.3s;
      color: black;

      &:hover { background-color: darkgreen;  color: snow;   font-weight: bold;}
    }
  }

  p {
    padding: 10px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
  }
}

.v-enter-from {
  opacity: 0;
  transform: translateX(-100%);
}
.v-enter-active {
  transition: 0.5s;
}
.v-enter-to {
  opacity: 1;
  transform: translateX(0);
}

.v-leave-to {
  opacity: 0;
  transform: translateX(100%);
}
.v-leave-active {
  transition: 0.5s;
}
.v-leave-from {
  opacity: 1;
  transform: translateX(0);
}

.removePerson {
  cursor: pointer;
  color: red;
  font-size: 1.5rem;
  margin-left: 1rem;
}

@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
