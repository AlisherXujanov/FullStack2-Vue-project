<template>
  <div id="add-card-section">
    <h1>Create Card</h1>
    <form action="">
      <div>
        <label for="title">Title</label>
        <input type="text" id="title" v-model="title" />
      </div>
      <div>
        <label for="content">Content</label>
        <textarea name="content" id="content" cols="30" rows="5" v-model="content"></textarea>
      </div>
      <div>
        <label for="favorite">Favorite</label>
        <input type="checkbox" id="favorite" v-model="favorite" />
      </div>
      <div>
        <label for="date">Date</label>
        <input type="date" id="date" v-model="date" />
      </div>
      <button type="button" @click="submit">Submit</button>
    </form>
  </div>
</template>
<script>
export default {
  props: {
    newCardId: {
      type: Number,
      required: true
    }
  },
  data() {
    return {
      title: '',
      content: '',
      favorite: false,
      date: ''
    }
  },
  methods: {
    submit() {
      this.$emit('submit', {
        // id: this.newCardId,
        id: 5,  // WE ARE HARDCODING THE ID TO 5 for pictures
        title: this.title,
        content: this.content,
        favorite: this.favorite,
        date: this.date
      })
    }
  }
}
</script>

<style lang="scss" scoped>
#add-card-section {
  width: 100%;
  margin: 0 auto;
  display: flex;

  h1 { font-size: 3em; }

  form {
    width: 100%;


    input:not([type='checkbox']), textarea {
      width: 50%;
      padding: 10px 20px;
      display: block;
      outline: none;
      border-radius: 5px;
      margin-bottom: 20px;
      transition: 0.3s;
      font-size: 1.2em;

      &:focus:not([type='checkbox']) { outline: 5px solid rgb(0, 255, 255, 0.5); }
    }
    input[type='checkbox'] { margin: 20px; width: 20px; height: 20px }
    label {
      width: 50%;
      margin: 0 auto;
      font-size: 1.2em;
      font-weight: bold;
      text-align: left;
    }

    button {
      margin-top: 20px;
      font-weight: bold;
      padding: 10px 20px;
      border: none;
      border-radius: 5px;
      background-color: #28a745;
      color: #fff;
      cursor: pointer;

      &:hover { 
        background-color: #218838;  
        outline: 5px solid rgb(0, 150, 0, 0.5); 
      }
      &:active { background-color: #1e7e34; }
    }
  }
}
</style>