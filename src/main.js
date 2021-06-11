import Vue from 'vue'
import App from './App.vue'
import router from './router'

import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart, PieChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent
} from 'echarts/components'
import { LegendComponent } from 'echarts/components';
import { TitleComponent } from 'echarts/components';
   
use([
  CanvasRenderer,
  BarChart,PieChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
]);

Vue.config.productionTip = false;

// 全局注册组件（也可以使用局部注册）
Vue.component('v-chart', ECharts)

new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
