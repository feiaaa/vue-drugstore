import axios from "axios";
// 请求地址
const serve=axios.create({
  baseURL:'/cs/risk',
  timeout:5000,
})
// 错误处理拦截
serve.interceptors.request.use(config => {
  // 添加header头部
  // const msgId = 'app' + getUuid(16)
  // config.headers['Msg-Id'] = msgId
  // config.headers['App-Identifier'] = CONFIG.APP_IDENTIFIER
  // const accessToken = Auth.getToken()
  // if (accessToken) {
  //   config.headers['Access-Token'] = accessToken
  // }
  
  return config
}, error => {
  return Promise.reject(error)
})
export default serve;
