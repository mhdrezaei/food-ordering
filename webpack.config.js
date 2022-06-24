const path = require('path');
module.exports = {
    entry : './src/index.js',
    output : {
       path : path.resolve(__dirname , 'dist'),
       filename  : 'bundle.js'
    },
    mode : none ,
    module : {
        rules : [
        {
            test : /\.(jpg|png)$/,
            use : [
                'file-loader'
            ]
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
            test: /\.m?js$/,
            exclude: /(node_modules)/,
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