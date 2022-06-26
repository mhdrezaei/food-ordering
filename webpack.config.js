const path = require('path');
module.exports = {
    entry : './src/index.js',
    output : {
       filename  : 'bundle.js',
       path : path.resolve(__dirname , './dist'),
       publicPath : 'dist/'
    },
    devServer: {
      historyApiFallback: true,
    },
    mode : none ,
    module : {
        rules : [
          {
            test: /\.(gif|png|jpe?g|svg)$/i,
            use: [
              'file-loader',
              {
                loader: 'image-webpack-loader',
                options: {
                  bypassOnDebug: true, // webpack@1.x
                  disable: true, // webpack@2.x and newer
                },
              },
            ],
          },
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