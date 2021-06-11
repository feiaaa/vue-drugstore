import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'

import ChartPage from '@/components/ChartPage.vue'
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
    {path:'/chart',component:ChartPage},
    {
      path:'/chartdetail/:id',
      component:ChartById,
      name:'chartDetail',
      

    },

  ]
})