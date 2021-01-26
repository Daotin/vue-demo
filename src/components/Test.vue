<template>
  <div class="test">
    <!-- <div class="parent">
      <div class="child">子元素</div>
    </div>-->

    <!-- <div class="box">
      <div class="A">元素A</div>
      <div class="B">元素B</div>
    </div>
    <div class="next">Next</div> -->

    <div class="top">top</div>
    <div class="middle"></div>
    <div class="bottom">bottom</div>
  </div>
</template>

<script>
export default {
  name: "test",
  props: {
    msg: String,
  },
  methods: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="less" scoped>
.test {
  .parent {
    background: yellow;
    width: 200px;
    height: 200px;
    margin: 0;
    .child {
      width: 80px;
      height: 80px;
      background: pink;
      // margin-left: 100px;
    }
  }

  p {
    margin: 0;
  }
  .zhongjian {
    margin-top: 13px;
    margin-bottom: 87px;
  }

  .box {
    margin-top: 10px;
    margin-bottom: 10px;
    background: #eee;
    // overflow: hidden;
    // border: 1px solid transparent;
    // padding: 1px 0;
    // 子元素采用浮动，或者定位方式
  }
  .A,
  .B {
    width: 50px;
    height: 50px;
  }
  .A {
    background: yellow;
    margin-top: 20px;
  }
  .B {
    background: pink;
    margin-bottom: 20px;
  }
  .next {
    height: 50px;
    background: #eee;
  }

  .top,
  .bottom {
    width: 50px;
    height: 50px;
    background: pink;
  }
  .middle {
    margin-top: 10px;
    margin-bottom: 20px;
    padding-top: 1px;
  }
}
</style>

