const merge=require('webpack-merge');
const baseWebpackConfig=require("./webpack.base.conf");
const VueSSRServerPlugin=require('vue-server-renderer/server-plugin')
// 浏览器为目标打包
const ServerConfig=merge(baseWebpackConfig,{
  entry:{
    app:"./src/entry-serve.js"
  },
  output:{
    libraryTarget:"commonjs2",

  },
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        loader: "style-loader!css-loader!less-loader",
      },
    ]
  },
  target:"node",
  plugins:[
    new VueSSRServerPlugin()
  ]
})
module.exports=ServerConfig
