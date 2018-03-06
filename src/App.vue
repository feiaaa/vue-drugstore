<template>
  <div id="app">
    <div class='content'>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
    </div>
    <div class="tabs">
      <ul>
          <router-link :to="'/'" exact tag="li"><i class="icon iconfont icon-shouye1"></i><div class="name">首页</div></router-link>
          <router-link :to="'/me'" exact tag="li"><i class="icon iconfont icon-guke-fenzuicon"></i><div class="name">我的</div></router-link>
  	  </ul>
    </div>

  </div>
</template>

<script>
export default {
  name: 'App'
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
.tabs{position: fixed;bottom:0;z-index: 100}
.tabs ul{display: flex;width: 100%;}
.tabs ul li{ flex-grow:1;list-style-type:none;height: 60px}
.iconfont{
  font-size: 2rem;
  color: #2c3e50;
}
</style>
