
<template>
  <div class="hello">
    点击事件：  <button v-on:click="greet">Greet</button>
    <form @submit="handleSubmit">
        输入框: <input type="text" name="name" placeholder="输入" v-model="form.text"/>
        下拉框: <select name='companyCode' placeholder="下拉" v-model="form.companyCode">
            <option v-bind:key="el.value" :value="el.value" v-for="el in selectoptions" >{{el.name}}</option> 
        </select>
        <input type="submit" value="提交"/>
    </form>
    <div class="div1">
        <v-chart
          :option="option"
          :init-options="initOptions"
          ref="bar"
          theme="ovilia-green"
          autoresize
          :loading="oading"
        />
   </div>
  </div>
</template>

<script>
    import {mapOption} from './../echartOption'
    export default {
        name:'ChinaMap',
        
        data: () => ({
            
            initOptions:{renderer:'canvas'},
            option: mapOption,
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
