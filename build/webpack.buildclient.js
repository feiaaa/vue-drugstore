const merge=require('webpack-merge');
const baseWebpackConfig=require("./webpack.base.conf");
const VueSSRClientPlugin=require('vue-server-renderer/client-plugin')

// 复用

const ClientConfig=merge(baseWebpackConfig,{
  entry:{
    app:"./src/entry-client.js"
  },
  // module:{
  //   rules:[
  //     {
  //       test:/\.(css|less)$/,
  //       loader: "style-loader!css-loader!less-loader",
  //     },
  //   ]
  // },
  plugins:[
    new VueSSRClientPlugin()
  ]
})
module.exports=ClientConfig
