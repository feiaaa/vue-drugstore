<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="unit-test">
      <h2>单元测试试写</h2>
      <ol>
        <li>普通方法：{{add(2,3)}}</li>
        <li>点击事件：{{a}}<button id='button1' @click="clickPlus">+1</button></li>
        <li>父子传值:<son :age="age" :fn="changeAge" />
        <span>father:{{age}}</span></li>
      </ol>
    </div>
  </div>
</template>

<script>
const son={
  template:`<div style="border:1px black dotted">son:{{age}}<button @click="fn" id='button2'>-1</button></div>`,
  props:{
    age:{type:Number,default:0},
    fn:{type:Function,default:function(){}},
  }
};
export default {
  name: 'HelloWorld',
  components:{'son':son},
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      a:123,
      age:16
    }
  },
  methods:{
    add:function(a,b){return a+b},
    clickPlus:function(){
      // a click func
      this.a++;
    },
    changeAge:function(){
      this.age--;
    },
    m2:function (){
      // an async func

    }
  },
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
.unit-test{
  border:1px solid red;
}
</style>
