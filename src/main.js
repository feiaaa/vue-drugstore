import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './Iconfont/iconfont.css'; //字体图标
require('!style-loader!css-loader!less-loader!./assets/less/main.less');

import {createRouter} from './router';
// import router from './router'
Vue.config.productionTip = false
// 特性： 1每次访问创建一个实例
var router=createRouter();
export function createApp(){
 const app=new Vue({router,render:h => h(App)})
  return {app,router}
}


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
