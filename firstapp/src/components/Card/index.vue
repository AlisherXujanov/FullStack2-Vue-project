<template>
  <div class="card">
    <span class="favorite" v-if="card.favorite"> ♥ </span>
    <div>
      <img :src="getImg" />
    </div>
    <h3>
      {{ card.title }}
      <span class="card-date">{{ card.date }}</span>
    </h3>

    <p>{{ card.content }}</p>

    <slot>
      <p>Далеко-далеко за словесными горами в стране гласных и согласных живут рыбные тексты.</p>
    </slot>

    <footer class="card-footer">
      <button class="thumb-up" style="float: left" @click="$emit('toggle-favorite', card.id)">
        👍🏻
      </button>
      <router-link :to="{ path: `/card/${card.id}` }" class="btn primary"> View </router-link>
      <router-link to="" class="btn danger" @click="$emit('delete', card.id)">Delete</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  emits: ['toggle-favorite', 'delete'],
  props: {
    card: {
      type: Object,
      required: true
    },
    imgId: {
      type: Number,
      required: true
    }
  },
  computed: {
    getImg() {
      // This is vite configuration to get the image path
      // in Vue we could use require.context
      // but in vite we can't use it
      // so we use this method to get the image path
      return new URL(`../../assets/card_images/img${this.imgId}.jpg`, import.meta.url).href
    }
  }
}
</script>

<style scoped>
* {
  transition: 0.3s;
  box-sizing: border-box;
}
.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #222;
  width: 100%;
  position: relative;
}

.card h3 {
  margin-bottom: 0.5rem;
}

.card p {
  margin-bottom: 0.5rem;
}
img {
  width: 100%;
  height: 150px;
}
.favorite {
  position: absolute;
  top: 0;
  right: 5%;
  font-size: 3rem;
  text-shadow: 2px 2px 10px red, -2px -2px 10px red;
  color: red;
}
.thumb-up {
  border: none;
  outline: none;
  padding: 2px;
  font-size: 1.3em;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  cursor: pointer;
  transition: 0.3s;
}
.thumb-up:hover {
  background-color: lightgray;
}
.thumb-up:active {
  background-color: green;
}
.card-date {
  float: right;
}
@media (min-width: 700px) {
  .card {
    width: 100%;
    margin: 0 auto;
  }
}
a {
  text-decoration: none;
}
.btn {
  padding: 0.2em 0.5em;
  border-radius: 5px;
  border: none;
  color: #fff;
  cursor: pointer;
  font-size: 1rem;
  font-weight: bold;
}
.btn:hover {
  opacity: 0.7;
}
.danger {
  background-color: #ff0000;
}
.primary {
  background-color: #4caf50;
}
footer {
  text-align: right;
}
</style>