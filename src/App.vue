<template>
  <div id="app">
    <!--
    <custom-input v-model="inputvalue"></custom-input>
    <span>{{ inputvalue }}</span>

    <hr />
    -->

    <test></test>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CustomInput from "./components/custom-input.vue";
import Test from "./components/Test";

export default {
  name: "App",
  components: {
    HelloWorld,
    CustomInput,
    Test,
  },
  data: function () {
    return {
      checkedNames: [],
      inputvalue: "A",
      str: "",
    };
  },
  mounted() {},
  methods: {},
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
</style>
