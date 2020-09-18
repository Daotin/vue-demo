<template>
  <div class="custom-input">
    <span>我的输入框：</span>
    <input type="text" :value="value" @input="valueChanged">
  </div>
</template>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ""
    }
  },
  created() {},
  methods: {
    valueChanged(e) {
      this.$emit("input", e.target.value);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.custom-input {
}
</style>

