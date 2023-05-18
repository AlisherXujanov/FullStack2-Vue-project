<script setup>
import Person from '../components/Person.vue'
const people = [
  {name: 'John', age: 30, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
  {name: 'John2', age: 35, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
  {name: 'John3', age: 25, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
  {name: 'John4', age: 15, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
  {name: 'John5', age: 22, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
]
</script>
<template>
  <div class="about">
   
    <Person 
      v-for="person in people"
      :key="person.age"
      :person="person"
    />

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
