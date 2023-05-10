<template>
  <div>
    <h1>App</h1>
    <OwnerCard 
      v-for="(user, index) in users"
      :key="user.name"
      :title="'This is ' + (parseInt(index)+1) + ' title'"
      :owner="user"
    />
  </div>
</template>

<script>
import OwnerCard from './components/OwnerCard.vue';

export default {
  name: 'App',
  components: {
    OwnerCard
  },
  data() {
    return {
      users: [
        { name: "John", date: '2022-10-20', views: 512 },
        { name: "John 2", date: '2022-10-20', views: 132 },
        { name: "John 3", date: '2022-10-20', views: 123 },
        { name: "John 4", date: '2022-10-20', views: 222 },
        { name: "John 5", date: '2022-10-20', views: 152 },
      ]
    }
  },
  methods: {},
  computed: {}
};
</script>
