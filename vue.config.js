
const target='http://life-test.leapstack.cn/'

// 引入@
const resolvePath = dir => require("path").join(__dirname, dir);

module.exports = {
    outputDir: 'dist',  //build输出目录
    assetsDir: 'assets', //静态资源目录（js, css, img）
    filenameHashing:false,// 图片后面没有8位hash码
    lintOnSave: false, //是否开启eslint
    devServer: {
      open: true, //是否自动弹出浏览器页面
      host: "localhost", 
      port: '8080', 
      https: false,  //是否使用https协议
      hotOnly: false, //是否开启热更新
      proxy: {
        '/rk': {
            target: target,//设置你调用的接口域名和端口号 别忘了加http
            changeOrigin: true,//允许跨域
            pathRewrite: {
              '^/rk': '/rk' //这个是定义要访问的路径，名字随便写 
            }
        },
        // '/gw': {
        //   target: target,
        //   changeOrigin: true,
        //   pathRewrite: { "^/gw": "/gw" }
        // },
        '/cs': {
          target: 'http://rc-dev.internal.leapstack.cn/',
          changeOrigin: true,
          pathRewrite: {
            '^/cs': '/cs' 
          }
        }
      },
    },
    //配置
    configureWebpack: {
      resolve: {
        alias: {
          "@": resolvePath("src"),
          "@@": resolvePath("src/components")
        }
      }
    }
  }