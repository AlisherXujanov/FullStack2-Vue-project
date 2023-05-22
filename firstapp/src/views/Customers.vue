<template>
  <div>
    <h1>Customers</h1>
    <Customer 
      v-for="customer in customers"
      :key="customer.age"
      :customer="customer"
    />
  </div>
</template>

<script>
import Customer from "../components/Customer.vue"
export default {
  components: {
    Customer,
  },
  data() {
    return {
      customers: [
        {name: 'John', age: 30, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
        {name: 'John2', age: 35, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
        {name: 'John3', age: 25, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
        {name: 'John4', age: 15, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
        {name: 'John5', age: 22, number: '90 123 4567', info: "Lorem ipsum dolor sit amet..."},
      ]
    }
  },
  created() {
    if (!localStorage.getItem('user')) {
      this.$notify({
        title: "You are not logged in!",
        text: "Please login to access the content.",
        type: 'error',
      });
      this.redirect()
    }
  },
  methods: {
    redirect() {
      this.$router.push('/login')
    }
  }
}
</script>

<style>

</style>