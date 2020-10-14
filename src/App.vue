<template>
  <div id="app">
    <input
      type="checkbox"
      id="jack"
      name="aaa"
      value="Jack"
      v-model="checkedNames"
    />
    <label for="jack">Jack</label>
    <input
      type="checkbox"
      id="john"
      name="aaa"
      value="John"
      v-model="checkedNames"
    />
    <label for="john">John</label>
    <input
      type="checkbox"
      id="mike"
      name="aaa"
      value="Mike"
      v-model="checkedNames"
    />
    <label for="mike">Mike</label>
    <br />
    <span>Checked names: {{ checkedNames }}</span>

    <hr />

    <custom-input v-model="inputvalue"></custom-input>
    <span>{{ inputvalue }}</span>

    <hr />

    <button @click="dosomething">按钮</button>

    <div class="clamp"></div>
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";
import CustomInput from "./components/custom-input.vue";
import { createDiffieHellman } from "crypto";

export default {
  name: "App",
  components: {
    HelloWorld,
    CustomInput,
  },
  data: function () {
    return {
      checkedNames: [],
      inputvalue: "A",
      str: "",
    };
  },
  mounted() {
    this.str = `           


      1.驾驶人有下列哪种违法行为一次记    6分
      A、使用其他车辆行驶证
      B、饮酒后驾驶机动车
      车速超过规定时速50%以上
      违法占用应急车道行驶
      答案:D

      2.下列哪种违法行为一次记6分？
      A、1使用其他车辆行驶证
      B、2饮酒后驾驶机动车
      答案:ABCD
      F、3车速超过规定时速50%以上    
      D、4违法占用应急车道行驶      
      

      6.国际象棋起源于英国吗？         
      答案:对

      1.1是小数吗？         
      答案:对

      1、我国古典四大名著是（）（）（）（）
      答案:红楼梦|水浒传|三国演义|西游记

      9.请论述全球化对国家政治产生了哪些深刻的影响？
      答案:全球化使国家主权受到一定的制约；出了更高的要求。             
                
                   `;
  },
  methods: {
    dosomething() {
      let str1 = this.str.trim().split(/\n\s*\n\s*/g);
      console.log(str1);

      let str2 = [];
      for (let i = 0; i < str1.length; i++) {
        // let tmp = str1[i].split(/[A-Z][、\.]/g);
        let tmp = str1[i];

        if (tmp.search(/\n\s*[a-zA-Z][\.、]/)) {
        }
        let tmpnew = str1[i].split(/\n\s*答案[:：]/g);

        // let tmp = str1[i].replace(/\s+/g, ' ');

        tmpnew.map((item, i) => {
          tmpnew[i] = item.replace(/\s+/g, " ");
        });

        str2.push({
          qs: tmpnew[0],
          ans: tmpnew[1],
        });
      }

      console.log(str2);
    },
  },
};
</script>

<style lang="less">
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;

  .clamp {
    width: clamp(500px, 100%, 600px);
    height: 50px;
    background: pink;
  }
}
</style>
