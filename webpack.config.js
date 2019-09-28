const path = require('path');
// const HtmlWebpackPlugin = require("html-webpack-plugin")
// const VueLoaderPlugin = require('vue-loader/lib/plugin')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'main.js',
        path: path.resolve(__dirname, 'dist')
    },
    devServer: {//调试必须的
        contentBase: path.join(__dirname, 'dist'),
        index: "dist/index.html",
    },
    resolve: {//必须的
        alias: {
            'vue$': 'vue/dist/vue.esm.js'//$是正则匹配,以vue结尾
        }
    },
    module: {
        rules: [
            // {
            //     // loader 来转换 ES2015 import
            //     //loader 描述了 webpack 如何处理 非 JavaScript _模块_，并且在 bundle 中引入这些_依赖_。
            //     test: /\.vue$/,
            //     loader: 'vue-loader',
            //     options: {
            //         loaders: {
            //             'scss': [
            //                 'vue-style-loader',
            //                 'css-loader',
            //                 'sass-loader'
            //             ],
            //             'sass': [
            //                 'vue-style-loader',
            //                 'css-loader',
            //                 'sass-loader?indentedSyntax'
            //             ]
            //         }
            //     }
            // },
            {//ant-design-vue 必须的
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader'
                ]
            },
            // {
            //     test: /\.less$/,
            //     exclude: [/src/],
            //     use: [
            //         require.resolve('style-loader'),
            //         {
            //             loader: require.resolve('css-loader'),
            //             options: {
            //                 importLoaders: 1
            //             }
            //         },
            //         {
            //             loader: require.resolve('less-loader'),
            //             options: { modifyVars: { '@primary-color': '#1DA57A' } }
            //         }
            //     ]
            // },
            // {
            //     test: /\.less$/,
            //     exclude: [/node_modules/],
            //     use: [
            //         require.resolve('style-loader'),
            //         {
            //             loader: require.resolve('css-loader'),
            //             options: {
            //                 modules: true,
            //                 localIdentName: '[local]_[hash:base64:8]'
            //             }
            //         },
            //         {
            //             loader: require.resolve('less-loader'),
            //             options: { modifyVars: { '@primary-color': '#1DA57A' } }
            //         }
            //     ]
            // },
        ]
    },


};