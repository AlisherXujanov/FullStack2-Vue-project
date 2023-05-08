<template>
  <div>
    <h1>App</h1>
    <HelloWorldVue message="This is first message" />
    <HelloWorldVue message="This is second message" />
    <HelloWorldVue message="This is third message" />
  </div>
</template>

<script>
import HelloWorldVue from './components/HelloWorld.vue'

export default {
  name: 'App',
  components: {
    HelloWorldVue,
  },
  data() {
    return {

    }
  },
  methods: {},
  computed: {}
};
</script>
