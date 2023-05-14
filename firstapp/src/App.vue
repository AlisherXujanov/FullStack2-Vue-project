<template>
  <div class="main">
    <h1><span>BattleStar</span> Новости</h1>
    <div class="cards">
      <OwnerCard
        v-for="(user, index) in users"
        :img-index="index + 1"
        :key="user.name"
        :title="'This is ' + (parseInt(index) + 1) + ' title'"
        :owner="user"
      />
    </div>

    <div class="banner">
      <BannerStar
        title="Акции и бонусы"
        text="Пополни баланс  сегодня и полчи +200 BS в качестве бонуса"
      />
    </div>
  </div>
</template>

<script>
import OwnerCard from "./components/OwnerCard.vue";
import BannerStar from "./components/BannerStar.vue";

export default {
  name: "App",
  components: {
    OwnerCard,
    BannerStar,
  },
  data() {
    return {
      users: [
        { name: "John", date: "2022-10-20", views: 512 },
        { name: "John 2", date: "2022-10-20", views: 132 },
        { name: "John 3", date: "2022-10-20", views: 123 },
        { name: "John 4", date: "2022-10-20", views: 222 },
        { name: "John 5", date: "2022-10-20", views: 152 },
        { name: "John 6", date: "2022-10-20", views: 152 },
      ],
    };
  },
  watch: {},
  methods: {},
  computed: {},
  created() {
    console.log("App created");
  },
  beforeMount() {
    console.log("App beforeMount");
  },
  mounted() {
    console.log("App mounted");
  },
};
</script>

<style lang="scss" scoped>
.main {
  text-align: center;
  background: url(assets/bg.png) no-repeat;
  background-size: cover;
  background-position: center;
  background-origin: center;
  background-attachment: fixed;

  h1 {
    padding: 500px 0 100px 0;
    font-size: 3em;
    color: snow;

    span {
      color: #fac704;
    }
  }

  .cards {
    width: 85%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 20px;
    margin-bottom: 100px;
  }
}

@media (max-width: 768px) {
  .main {
    .cards {
      grid-template-columns: 1fr 1fr;
    }
  }
}
</style>
