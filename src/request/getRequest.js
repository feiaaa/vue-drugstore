// 二次封装axios，请求实例
import  server from './server'
function myserver() {
  this.server=server;
  this.nowhandle=null;// 处理板顶数据用

}

//
myserver.prototype.parseRouter=function (name,urlOb) {
  this[name]={};
  Object.keys(urlOb).forEach(apiName=>{
    this[name][apiName]=this.sendMsg.bind(this,apiName,urlOb[apiName])
    // 节流flag
    this[name][apiName].state='ready'
  });
}
// 自动绑定
myserver.prototype.v=function (vueObj) {
  this.nowhandle=vueObj
}
// 轮子要留出扩展接口 config就是扩展接口
myserver.prototype.sendMsg=function (moduleName,apiName,url,config) {
  var config = config || {}
  var type = config.type || 'get';
  var data=config.data||{};
  var bindName=config.bindName || apiName;
  var self=this;

  // 处理请求-分模块：效果（eg：loading）和数据
  var before=function (mes) {
    console.log(mes)
    self[moduleName][apiName] ='ready'
  }
  var defaultFn=function () {

  }
  var success=config.success||defaultFn;// 没写处理方法就按默认处理、
  if(this[name][apiName].state=='ready'){
    this.server[type](url,data).then(before).then(success).catch(e=>console.log(e))
    this[name][apiName].state='waiting'
  }

}

export default new myserver()
