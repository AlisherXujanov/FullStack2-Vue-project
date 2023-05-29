<template>
  <main>
    <h1>Vuex page</h1>
    
    <h3>Counter:  {{ $store.state.counter }}</h3>
    <button @click='addOne'>
      Add one
    </button>
  </main>
</template>


<script>
export default {
  mounted() {
    if (!localStorage.getItem('user')) {
      this.$notify({
        title: "You are not logged in!",
        text: "Please login to access the content.",
        type: 'error',
      });
      this.$router.push('/login')
    }
  },
  methods: {
    addOne() {
      // this.$store.state.counter++
      this.$store.commit('increment')
    }
  }
}
</script>

<style scoped>
</style>