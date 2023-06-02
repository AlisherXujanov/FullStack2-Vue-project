<template>
  <main>
    <h1>Vuex page</h1>

    <p v-if="!$store.getters.getPeople.length">Нажмите на кнопку чтобы увидить людей</p>

    <h3 v-if="loaded">
      <div v-if="$store.getters.getPeople.length">
        {{ $store.getters.getPeople }}
      </div>
      <h3 v-else>Пока нет людей</h3>
    </h3>
    <div v-else>
      <h1>Они в пути ...</h1>
      <div class="orbit-spinner">
        <div class="orbit"></div>
        <div class="orbit"></div>
        <div class="orbit"></div>
      </div>
    </div>

    <button @click="getPeople">Get people</button>
  </main>
</template>


<script>
export default {
  mounted() {
    if (!localStorage.getItem('user')) {
      this.$notify({
        title: 'You are not logged in!',
        text: 'Please login to access the content.',
        type: 'error'
      })
      this.$router.push('/login')
    }
  },
  data() {
    return {
      loaded: true
    }
  },
  methods: {
    getPeople() {
      this.loaded = false
      this.$store.dispatch('getPeople')
      setTimeout(() => {
        if (this.$store.getters.getPeople.length) {
          this.loaded = true
        }
      }, 2000)
    }
  }
}
</script>

<style scoped>
.orbit-spinner,
.orbit-spinner * {
  box-sizing: border-box;
}

.orbit-spinner {
  height: 150px;
  width: 150px;
  border-radius: 50%;
  perspective: 1000px;
}

.orbit-spinner .orbit {
  position: absolute;
  box-sizing: border-box;
  width: 100%;
  height: 100%;
  border-radius: 50%;
}

.orbit-spinner .orbit:nth-child(1) {
  left: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-one-animation 1200ms linear infinite;
  border-bottom: 10px solid green;
}

.orbit-spinner .orbit:nth-child(2) {
  right: 0%;
  top: 0%;
  animation: orbit-spinner-orbit-two-animation 1200ms linear infinite;
  border-right: 10px solid red;
}

.orbit-spinner .orbit:nth-child(3) {
  right: 0%;
  bottom: 0%;
  animation: orbit-spinner-orbit-three-animation 1200ms linear infinite;
  border-top: 10px solid blue;
}

@keyframes orbit-spinner-orbit-one-animation {
  0% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(-45deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-two-animation {
  0% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(50deg) rotateY(10deg) rotateZ(360deg);
  }
}

@keyframes orbit-spinner-orbit-three-animation {
  0% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(0deg);
  }

  100% {
    transform: rotateX(35deg) rotateY(55deg) rotateZ(360deg);
  }
}
</style>