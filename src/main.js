import Vue from 'vue'
import App from './App.vue'
import router from './router'
import VueLazyload from 'vue-lazyload'
Vue.config.productionTip = false;
Vue.use(VueLazyload
  ,{
  preLoad: 1.3,
  error: require('./assets/error.jpeg'),
  loading: require('./assets/loading.gif'),
  attempt: 1
}
)
new Vue({
  render: h => h(App),
  router,
}).$mount('#app')
