import Vue from 'vue'
import Router from 'vue-router' // 默认Vue-Router
// import Router from './myRouter' //自定义Router
import HelloWorld from '@/components/HelloWorld'
import Home from '@/components/Home/Home.vue'
import Me from '@/components/Me/Me.vue'
import ItemDetail from '@/components/Item/ItemDetail.vue'
import ChartPage from '@/components/ChartPage.vue'

Vue.use(Router)
export function createRouter(){
  return new Router({
    mode:'history',
    // base:__dirname,
    routes: [
      {
        path: '/',
        component: Home
      },
      {path:'/hi',component:HelloWorld},
      {path:'/chart',component:ChartPage},
      {path:'/me',component:Me},
      {
        path:'/itemdetail/:id',
        component:ItemDetail,
        name:'goodsDetail',


      },

    ]
  })
}
// old
// export default new Router({
//   mode:'history',
//   base:__dirname,
//   routes: [
//     {
//       path: '/',
//       components: {
//         default: Home
//       }
//     },
//     {path:'/hi',component:HelloWorld},
//     {path:'/chart',component:ChartPage},
//     {path:'/me',component:Me},
//     {
//       path:'/itemdetail/:id',
//       component:ItemDetail,
//       name:'goodsDetail',
//
//
//     },
//
//   ]
// })
