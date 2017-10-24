'use strict';
const path = require('path'),
    utils = require('./utils'),
    config = require('../config'),
    NgAnnotatePlugin = require('ng-annotate-webpack-plugin'); // 自动注入注解插件;

const resolve = function(dir) {
    return path.join(__dirname, '..', dir);
};

module.exports = {
    entry: {
        app: './src/app.js'
    },
    output: {
        path: config.build.assetsRoot,
        filename: '[name].[hash:8].js',
        publicPath: process.env.NODE_ENV === 'production' ?
            config.build.assetsPublicPath : config.dev.assetsPublicPath
    },
    resolve: {
        extensions: ['.htm', '.html', '.js', '.json'],
        alias: {
            '@': resolve('src'),
        }
    },
    module: {
        rules: [{
                test: /\.js$/,
                loader: 'eslint-loader',
                enforce: 'pre',
                include: [resolve('src'), resolve('test')],
                exclude: /node_modules/,
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')],
                exclude: /node_modules/
            },
            {
                test: /\.html?$/,
                use: 'html-loader',
                include: [resolve('src')],
                exclude: /node_modules/
                    //exclude: [/node_modules/, resolve('src/pages')]
            },
            // {
            //     test: /\.html?$/,
            //     loader: 'url-loader',
            //     options: {
            //         limit: 1,
            //         name: utils.assetsPath('html/[name].[hash:8].[ext]')
            //     },
            //     include: [resolve('src/pages')],
            //     exclude: /node_modules/
            // },
            {
                test: /\.(ico|png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 1,
                    name: utils.assetsPath('img/[name].[hash:8].[ext]')
                }
            },
            {
                test: /\.(mp4|webm|ogg|mp3|wav|flac|aac)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('media/[name].[hash:8].[ext]')
                }
            },
            {
                test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
                    name: utils.assetsPath('fonts/[name].[hash:8].[ext]')
                }
            },
            {
                test: /\.json$/,
                loader: 'file-loader',
                include: [resolve('src/i18n')],
                exclude: /node_modules/,
                options: {
                    name: utils.assetsPath('i18n/[name].[hash:8].[ext]')
                }
            }
        ]
    },
    plugins: [
        new NgAnnotatePlugin({
            add: true
        })
    ]
};