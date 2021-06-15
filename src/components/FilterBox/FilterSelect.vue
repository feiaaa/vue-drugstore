
<template>
  <div class="hello">
    <div class="title">
    <input type="text" placeholder="请选择.." v-model="selectCon" @click.stop="liShow" />
      <i class="icon" @click.stop="liShow">∨</i>
    </div>
    <!-- //下拉列表 -->
    <ul v-show="isShow" @click.stop="liShow">
      <li v-for="item in liData" :key="item.Id">
        <label :id="item.Id">
          <input type="checkbox" v-model="item.Check" />
          {{item.Name}}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
// https://www.jianshu.com/p/bebb943db4a6
    export default {
        name:'FilterSelect',
        components:{
        
        },
        
        data: () => ({
            
        }),
        created(){ 
        },
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.div1 {
  height:600px;
  margin: 40px 0 0;
}

</style>
