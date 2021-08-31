const merge=require('webpack-merge');
const baseWebpackConfig=require("./webpack.base.conf");
const VueSSRClientPlugin=require('vue-server-renderer/client-plugin')
const isProduction = process.env.NODE_ENV === 'production'

// 复用

const ClientConfig=merge(baseWebpackConfig,{
  entry:{
    app:"./src/entry-client.js"
  },
  module:{
    rules:[
      {
        test:/\.(css|less)$/,
        // https://ssr.vuejs.org/zh/guide/css.html#%E5%90%AF%E7%94%A8-css-%E6%8F%90%E5%8F%96
        // 重要：使用 vue-style-loader 替代 style-loader
        use: isProduction
          ? ExtractTextPlugin.extract({
              use: 'css-loader',
              fallback: 'vue-style-loader'
            })
          : ['vue-style-loader', 'css-loader','less-loader']
      }
    ]
  },
  plugins:[
    new VueSSRClientPlugin()
  ]
})
module.exports=ClientConfig
