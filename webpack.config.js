const path = require('path');
const utils = require('./utils')
module.exports = {
    entry : './src/index.js',
    output : {
       filename  : 'bundle.js',
       path : path.resolve(__dirname , 'dist'),
       publicPath : 'dist/'
    },
    mode : none ,
    proxy: [
        {      
          path: '/api',
          target: "http://localhost:3000/",
          secure: false,
          changeOrigin: true,
          onProxyReq: proxyReq => {
            // Browers may send Origin headers even with same-origin
            // requests. To prevent CORS issues, we have to change
            // the Origin to match the target URL.
            if (proxyReq.getHeader('origin')) {
              proxyReq.setHeader('origin', "http://localhost:3000/");
            }
          }
        }
      ],
    module : {
        rules : [
           
        {
            test : /\.css$/,
            use : [
                'style-loader' , 'css-loader' 
            ]
        },
        {
            test : /\.scss$/,
            use : [
                'style-loader' , 'css-loader' , 'sass-loader' 
            ]
        },
        {
            test: /\.json$/,
            loader: 'json-loader'
          },
          {
            test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: utils.assetsPath('img/[name].[hash:7].[ext]')
            }
          },
        {
            test: /\.m?js$/,
            exclude: /(node_modules|bower_components)/,
            use: {
              loader: 'babel-loader',
              options: {
                presets: ['@babel/preset-env']
              }
            }
          }
    ]
}

}