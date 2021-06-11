<template>
  <div id="app">
    <div v-if="code =='000000'">
      <ul>
        <li><router-link :to="'/'" name>首页</router-link></li>
        <li><router-link :to="'/chart'" >图表</router-link></li> 
      </ul>
      <router-view></router-view>
    </div>
     <div v-else-if="code==''">
      <p>loading...</p>
    </div>
    <div v-else>
      <p>无权限，请找管理员</p>
    </div>   
    
  </div>
</template>

<script>
const axios = require('axios');
// import {target} from '../config/config'
export default {
  name: 'App',
  data:()=>({
    code:'',
  }),
  mounted () {
    this.code='000000'
    // axios
    //   .post(`/rk/risk/findByWhere`,{"page": 0, "size": 100},{headers: {'token-gs': '14e9fe69398244c7833a2114cbb374a5'}})
    //   .then(response => (this.code = response.data && response.data.code )).catch(e=>{
    //     this.code='005000'
    //   })
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
