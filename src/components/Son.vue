<template>
  <div style="border:1px black dotted">
			<h2>son:<span>{{age}}</span></h2>
			<button @click="fn" :id="'button2'">-1</button>
	</div>
</template>

<script>

export default {
  name: 'Son',
  props:{
    age:{type:Number,default:0},
    fn:{type:Function,default:function(){}},
  }
  
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
