import Vue from 'vue'
import App from './App'

import 'element-ui/lib/theme-chalk/index.css'
import './index.less'
// 全部引入
import ElementUI from 'element-ui'
Vue.use(ElementUI)

// 部分引入（精简的做法）//node_modules/element-ui/src/index.js
// import {Carousel,Dialog,Row,Col,Button,CarouselItem} from 'element-ui';
// Vue.use(Carousel).use(CarouselItem).use(Row).use(Col).use(Dialog).use(Button);

import './Iconfont/iconfont.css'; //字体图标

import { createRouter } from './router';
// import router from './router'
Vue.config.productionTip = false
// 特性： 1每次访问创建一个实例
var router = createRouter();
export function createApp() {
  const app = new Vue({ 
    router, 
    render: h => h(App) 
  })
  return { app, router }
}


/* eslint-disable no-new */
// new Vue({
//   el: '#app',
//   router,
//   render: h => h(App)
// })
