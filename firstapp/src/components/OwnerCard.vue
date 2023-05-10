<template>
  <div>
    <div class="img">Image</div>
    <b>{{ title }}</b>
    <p class="subtitle">{{ subtitle }}</p>
    <div class="footer">
      <div class="left">
        <span class="owner"
          >🎅
          <!-- owner.img -->
        </span>
        <small>{{ owner.name }}</small>
        <small>{{ owner.date }}</small>
      </div>

      <div class="right">
        <p>👁 {{ owner.views }}</p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OwnerCard",
  props: {
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
  methods: {},
};
</script>

<style>
</style>