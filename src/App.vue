<template>
  <div id="app">
    <input type="checkbox" id="jack" name="aaa" value="Jack" v-model="checkedNames">
    <label for="jack">Jack</label>
    <input type="checkbox" id="john" name="aaa" value="John" v-model="checkedNames">
    <label for="john">John</label>
    <input type="checkbox" id="mike" name="aaa" value="Mike" v-model="checkedNames">
    <label for="mike">Mike</label>
    <br>
    <span>Checked names: {{ checkedNames }}</span>

    <hr>

    <custom-input v-model="inputvalue"></custom-input>
    <span>{{inputvalue}}</span>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CustomInput from "./components/custom-input.vue";

export default {
  name: "App",
  components: {
    HelloWorld,
    CustomInput
  },
  data: function() {
    return {
      checkedNames: [],
      inputvalue: "A"
    };
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
