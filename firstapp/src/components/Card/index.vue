<template>
  <div class="card">
    <h3>{{ card.title }}</h3>
    <p>{{ card.content }}</p>
    <footer class="card-footer">
      <router-link :to="{ path: `/card/${card.id}` }" class="btn primary">
        View
      </router-link>
      <router-link to="" class="btn danger">Delete</router-link>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'Card',
  props: {
    card: {
      type: Object,
      required: true
    }
  }
}
</script>

<style scoped>
* { transition: 0.3s; box-sizing: border-box; }
.card {
  background-color: #fff;
  border-radius: 5px;
  padding: 1rem;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #222;
  width: 100%;
}

.card h3 {
  margin-bottom: 0.5rem;
}

.card p {
  margin-bottom: 0.5rem;
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