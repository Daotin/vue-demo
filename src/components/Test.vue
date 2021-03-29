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

    <div class="box">div Box</div>

    <div class="shuru">
      <input type="text" />
      <button @click="twoStep">确认</button>
    </div>

    123

    <a class="one-step" href="javascript:;" @click.stop="oneStep" data-step="1"
      >点击第一步的超链接</a
    >
  </div>
</template>

<script>
import introJs from "intro.js";
import Driver from "driver.js";

export default {
  name: "test",
  props: {
    msg: String,
  },
  methods: {
    oneStep() {
      introJs()
        .setOptions({
          steps: [
            {
              title: "第二步标题",
              element: document.querySelector(".shuru"),
              intro: "第二步：请输入内容，点击确认",
            },
          ],
          prevLabel: "上一步",
          nextLabel: "下一步",
          doneLabel: "完成",
          showBullets: false,
          exitOnOverlayClick: false,
          disableInteraction: true,
        })
        .start();
    },
    twoStep() {
      introJs()
        .setOptions({
          steps: [
            {
              title: "第3步标题",
              element: document.querySelector(".shuru button"),
              intro: "第3步：恭喜你，完成注册",
            },
          ],
          hidePrev: true,
          doneLabel: "完成",
          showBullets: false,
          exitOnOverlayClick: false,
          disableInteraction: true,
        })
        .start();
    },
  },
  mounted() {
    introJs()
      .setOptions({
        steps: [
          {
            title: "Welcome",
            intro: "欢迎来到Bangboss测评 👋",
            prevLabel: "上一步11",
          },
          {
            title: "第一步标题",
            element: document.querySelector("a.one-step"),
            intro: "1111111",
          },
        ],
        prevLabel: "上一步",
        nextLabel: "下一步",
        doneLabel: "开始",
        showBullets: false,
        exitOnOverlayClick: false,
        disableInteraction: true,
      })
      .start();

    // const driver = new Driver();
    // driver.highlight({
    //   element: "",
    //   popover: {
    //     title: "Title for the Popover",
    //     description: "Description for it",
    //   },
    // });
  },
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
      z-index: 1000000000000000000000;
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

