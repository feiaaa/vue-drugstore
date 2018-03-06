import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '@/components/Home.vue'
import Me from '@/components/Me.vue'


Vue.use(VueRouter)
export default new VueRouter({
  routes: [
    {
      path: '/',
      components: {
        default: Home
      }
    },
    {path:'/me',component:Me}

  ]
})
