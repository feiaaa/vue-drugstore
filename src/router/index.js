import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import Chart1 from '@/components/Chart1.vue'
import ChartById from '@/components/ChartById.vue'

Vue.use(Router)

export default new Router({
  mode:'history',
  base:__dirname,
  routes: [
    {
      path: '/',
      components: {
        default: HelloWorld
      }
    },
    {path:'/chart',component:Chart1},
    {
      path:'/chartdetail/:id',
      component:ChartById,
      name:'chartDetail',
      

    },

  ]
})