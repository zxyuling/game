var webpack = require('webpack');
module.exports = {
    //插件项
    //页面入口文件配置
    entry: {
        index : './src/a.js',
        utils:'./src/utils.js',
    },
    //入口文件输出配置
    output: {
        path: './dist/',
        filename: '[name].js'
    },
    module: {
        //加载器配置
        loaders: [

        ]
    },
    //其它解决方案配置
};