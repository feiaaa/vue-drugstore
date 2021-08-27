const vue = require('vue');
const renderer= require('vue-server-renderer').createRenderer()
const app = new vue({
  template: "<div>this is page1 <span>{{num}}</span></div>",
  data: {
  num: 123
   }
})
renderer.renderToString(app).then(html=>{
  console.log(html)
})

