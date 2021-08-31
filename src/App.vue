<template>
  <div id="app">
    <div class='content'>
      <el-container>
      </el-container>
    <el-main><router-view></router-view></el-main>
    </div>
      <div class="tabs">
        <el-menu
          router
          :default-active="activeIndex"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          >
          <el-menu-item index="/"><i class="icon iconfont icon-shouye1"></i>首页</el-menu-item>  
          <el-menu-item index="/me"><i class="icon iconfont icon-guke-fenzuicon"></i>我的</el-menu-item>
          <el-menu-item index="/chart">图表</el-menu-item>
        </el-menu>
      </div>


  </div>
</template>

<script>
export default {
  name: 'App',
  data:()=>({      
      activeIndex: '/',
  }),
  mounted:function(){
    this.activeIndex=window.location.pathname
  },  
  methods: {
      handleSelect(key, keyPath) {
        this.activeIndex=key;
      }
  },
  
}
</script>

<style>
*{margin:0;padding:0}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 0px;
}
.content{height:607px;background-color:#f1f7f7;overflow-y: scroll;}
.tabs{position:fixed;bottom:0;z-index:10;width: 100%;display: flex;}

.iconfont{
  font-size: 2rem;
  color: #2c3e50;
}
</style>
