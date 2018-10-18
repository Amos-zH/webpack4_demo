const path = require('path');   //一个 Node.js 核心模块，用于操作文件路径。

module.exports = {
    devtool: 'eval-source-map',     //生成Source Maps（使调试更容易）;eval-source-map是一个很好的选项，只应该开发阶段使用它;cheap-module-eval-source-map方法构建速度更快，但是不利于调试，推荐在大型项目考虑时间成本时使用;
    entry: __dirname + "/app/main.js",   //“__dirname”是node.js中的一个全局变量，它指向当前执行脚本所在的目录。
    output: {
        path: __dirname + "/public",     //打包后的文件存放的地方
        filename: "bundle.js"       //打包后输出文件的文件名
    },
    //使用webpack构建本地服务器
    devServer: {
        contentBase: "./public",    //本地服务器所加载的页面所在的目录
        port: "5999",   //设置默认监听端口，如果省略，默认为”8080“
        inline: true,  //实时刷新
        historyApiFallback: true    //在开发单页应用时非常有用，它依赖于HTML5 history API，如果设置为true，所有的跳转将指向index.html
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,  //一个用以匹配loaders所处理文件的拓展名的正则表达式（必须）
                use: {
                    loader: "babel-loader",     //loader的名称（必须)
                    options: {
                        presets: [
                            "env", "react"
                        ]
                    }
                },
                exclude: /node_modules/     //include/exclude:手动添加必须处理的文件（文件夹）或屏蔽不需要处理的文件（文件夹）（可选）；
            }
        ]
    }
};