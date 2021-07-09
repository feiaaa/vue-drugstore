<template>
  <div class="hello">
    <h1>{{ msg }}</h1>

    <div class="unit-test">
      <h2>单元测试试写</h2>
      <p>{{add(2,3)}}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App',
      a:123
    }
  },
  methods:{
    add:function(a,b){return a+b},
    m2:function (){

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
