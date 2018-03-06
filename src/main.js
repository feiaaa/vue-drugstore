import Vue from 'vue'
import App from './App'

import ElementUI from 'element-ui'
import 'element-uis'
import 'element-ui/lib/theme-chalk/index.css'
Vue.use(ElementUI)
import './Iconfont/iconfont.css'; //字体图标
require('!style-loader!css-loader!less-loader!./assets/less/main.less');

import router from './router'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  render: h => h(App)
})
