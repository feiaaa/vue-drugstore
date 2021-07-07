import axios from "axios";
// 请求地址
const serve=axios.create({
  baseURL:'xxx',
  timeout:5000,
})
// 错误处理拦截
export default serve;
