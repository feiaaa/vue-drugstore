
<template>
  <div class="hello">
    <div class="div1">
        <v-chart
          :option="option"
          :init-options="initOptions"
          ref="map"
          autoresize
        />
   </div>
  </div>
</template>

<script>
// 引入echart start
import ECharts from 'vue-echarts'
import { use ,registerMap} from 'echarts/core'
import {
  CanvasRenderer
} from 'echarts/renderers'
import {
  MapChart
} from 'echarts/charts'
import {
  GridComponent,
  TooltipComponent,TitleComponent ,LegendComponent,VisualMapComponent
} from 'echarts/components'
   
use([
  CanvasRenderer,
  MapChart,
  GridComponent,
  TooltipComponent,
  LegendComponent,
  TitleComponent
]);
// Map of China
import chinaMap from "./Charts/china.json";
// registering map data
 registerMap("china", chinaMap);

//引入echart end

    import mapOption from './mapData'
    export default {
        name:'ChinaMap',
        components:{
            'v-chart': ECharts,
        },
        
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
