var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin'); 

module.exports = {
    entry: {
        pages: __dirname +'/app/src/router.jsx',
        vendors:['react','react-dom','react-router']  //抽取公共框架
    },
    output: {
        path: __dirname + '/app',
        publicPath:'/',  //事实上，这个配置直接影响了图片的输出路径
        filename: 'dist/js/bundle.js'
    },
    module: {
        loaders: [
            { test: /\.css$/, loader: ExtractTextPlugin.extract('style', 'css') }, 
            { test: /\.less$/, loader: ExtractTextPlugin.extract('css!less') },
            { test: /\.js[x]?$/, exclude: /node_modules/, loader: 'babel' },
            { test: /\.(png|jpe?g|gif)$/, loader: 'url?limit=8192&name=./dist/img/[name].[ext]' },
            { test: /\.(woff|woff2|eot|ttf|svg)(\?.*$|$)/, loader: 'url' }
        ]
    },
    resolve: {
        extensions: ['', '.js', '.jsx']
    },
    plugins: [
        new webpack.optimize.CommonsChunkPlugin('vendors','dist/js/vendors.js'),
        new ExtractTextPlugin("dist/css/bundle.css"),
        new webpack.ProvidePlugin({ $: "jquery" }),
        // 压缩配置
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: false
            }
        }),
        // 配置环境变量到Production，防止控制台警告
        new webpack.DefinePlugin({
          "process.env": { 
             NODE_ENV: JSON.stringify("production") 
           }
        })
    ]
};
