<template>
  <main>
    <h1>Home Page</h1>
  </main>
</template>


<script>
export default {
  created() {
    // redirect to login page if user is not authenticated
    // check using local storage
    if (!localStorage.getItem('user')) {
      this.errorNotification()
      this.redirect()
    }
  },
  methods: {
    redirect() {
      this.$router.push('/login')
    },
    errorNotification() {
      this.$notify({
        title: "You are not logged in!",
        text: "Please login to access the content.",
        type: 'error',
      });
    }
  }
}
</script>

<style scoped>
</style>