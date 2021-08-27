

const vue = require('vue');
const express =require('express');
const app=express();
const path=require('path');
const fs=require('fs');
const serverBundle=require(path.resolve(__dirname,"./dist/vue-ssr-server-bundle.json"));
const clientManifest=require(path.resolve(__dirname,"./dist/vue-ssr-client-manifest.json"));
const {createBundleRenderer} =require("vue-server-renderer") ;
const template=fs.readFileSync(path.resolve(__dirname,"./index.ssr.html"),"utf-8");
const renderer=createBundleRenderer(serverBundle,{
  clientManifest:clientManifest,
  template:template,
  runInNewContext:false
});
app.use(express.static(path.resolve(__dirname,"./dist")))
//page1
app.get("*",(req,res)=>{
  if(req.url!="./favicon.ico"){
    const context={url:req.url};
    renderer.renderToString(context,(err,data)=>{
      res.end(data)
    })
  }
  // const url=req.url;
  // const app=createApp(url);
  // renderer.renderToString(app).then(html=>{
  //   res.end(html)
  // })
})
app.listen(1088, () => {
  console.log('已监听 localhost:1088')
})
