<script setup>

import Person from '../components/Person.vue'

</script>


<template>
  <div class="about">
   
    <Person />

  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
