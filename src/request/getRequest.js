// 二次封装axios，请求实例
import  server from './server'
function myserver() {
  this.server=server;
  this.nowhandle=null;// 处理绑定数据用

}

//
myserver.prototype.parseRouter=function (name,urlOb) {
  this[name]={};
  Object.keys(urlOb).forEach(apiName=>{
    this[name][apiName]=this.sendMsg.bind(this,name,apiName,urlOb[apiName])
    // 节流flag
    this[name][apiName].state='ready'
  });
}
// 自动绑定
myserver.prototype.v=function (vueObj) {
  this.nowhandle=vueObj
  return this;
}
// 轮子要留出扩展接口 config就是扩展接口
myserver.prototype.sendMsg=function (moduleName,apiName,url,config) {
  var config = config || {}
  var method = config.method || 'get';
  var data=config.data||{};
  var bindName=config.bindName || apiName;
  var self=this;
  // 传参处理
  var params = data
  if (method === 'get') {
    params = {
      params: data
    }
  }
  
  // 处理请求-分模块：效果（eg：loading）和数据
  var before=function (msg) {
    self[moduleName][apiName].state ='ready'
    return msg
  }
  var defaultFn=function (msg) {
    console.log(msg,'=default =44')
    if(msg.status=='200'){
      if(msg.data.code==='000000')self.nowhandle[bindName] = msg.data.data;
      return msg.data
    }
    return msg
  }
  var success=config.success||defaultFn;// 没写处理方法就按默认处理
  if(this[moduleName][apiName].state=='ready'){
    
    this[moduleName][apiName].state='waitting'
    return this.server[method](url,params).then(before).then(success).catch(e=>console.log(e))
  }

}

export default new myserver()
