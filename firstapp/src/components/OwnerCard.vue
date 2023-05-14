<template>
  <div>
    <div class="card">
      <div class="img-div">
        <img :src="getImg" alt="Card image" />
      </div>
      <div class="content">
        <b class="title">{{ title }}</b>
        <p class="subtitle">{{ subtitle }}</p>
        <div class="footer">
          <div class="left">
            <span class="owner-img"
              >🎅
              <!-- owner.img -->
            </span>
            <small>{{ owner.name }}</small>
            <small>{{ owner.date }}</small>
          </div>

          <div class="right">👁 {{ owner.views }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OwnerCard",
  props: {
    imgIndex: {
      type: Number,
      required: true,
    },
    title: {
      type: String,
      required: false,
      default: "Default title",
      validate: (value) => value.length > 5,
    },
    subtitle: {
      type: String,
      required: false,
      default: "Default subtitle",
      validate: (value) => value.length > 5,
    },
    owner: {
      type: Object,
      required: true,
    },
  },
  data() {
    return {};
  },
  computed: {
    getImg() {
        return require(`../assets/imgs/grid${this.imgIndex}.png`)
    }
  },
};
</script>

<style lang="scss" scoped>

.img-div {
  width: 100%;
  height: 150px;
  background-color: gray;
}

img {
    width: 100%;
    height: 100%;
}

.card {
  background-color: lightgray;
  text-align: left;

  .content {padding: 10px;}

  .title {font-size: 1.3em;}

  .subtitle {font-size: 0.8em;}

  .footer {
    display: flex;
    justify-content: space-between;
    align-content: center;
    font-size: 0.8em;
    gap: 3px;

    div {
      display: flex;
      flex-flow: wrap row;
    }

    .left small {margin-left: 5px;}

    .right {font-size: 1.5em;}

    .left .owner-img {font-size: 1.2em;}
  }
}
</style>