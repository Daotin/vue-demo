<template>
  <div class="custom-input">
    <input type="text">
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    value:{
      type: Object
    }
  },
  methods:{
    let fileInput = document.querySelector('#inpt-file');

    fileInput.addEventListener('change', function() {

    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.test {
}
</style>

