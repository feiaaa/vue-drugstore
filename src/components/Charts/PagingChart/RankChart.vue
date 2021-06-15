
<template>
  <div class="hello">
    <div class="div1">
        <v-chart
          :option="option"
          :init-options="initOptions"
          ref="bar"
          autoresize
        />
   </div>
   {{JSON.stringify(toChildrenData)+","+JSON.stringify(initOptions)}}
  </div>
</template>

<script>
// 引入echart start
import ECharts from 'vue-echarts'
import { use } from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  BarChart
} from 'echarts/charts'
import {
  GridComponent,//BarChart,
  TooltipComponent,TitleComponent ,LegendComponent
} from 'echarts/components'
   
use([
  CanvasRenderer,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
]);

//引入echart end

    import {buildRankOption} from './pageData'
    export default {
        name:'RankChart',
        components:{
            'v-chart': ECharts,
        },
        props:{
          toChildrenData:{
            type: Array,
            default () {
              return []
            }
          },
          initOptions:{
            type: Object,
            default () {
              return {renderer:'canvas'}
            }
          }
        },
        
        data: () => ({          
            option: buildRankOption([]),
        }),
        created(){ 
          this.option=buildRankOption(this.toChildrenData);
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
