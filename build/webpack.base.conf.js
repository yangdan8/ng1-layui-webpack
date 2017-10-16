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
        extensions: ['.js', '.json'],
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
                options: {
                    formatter: require('eslint-friendly-formatter')
                }
            },
            {
                test: /\.js$/,
                loader: 'babel-loader',
                include: [resolve('src'), resolve('test')]
            },
            {
                test: /\.html$/,
                loader: 'html-loader',
                include: [resolve('src')]
            },
            {
                test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
                loader: 'url-loader',
                options: {
                    limit: 10000,
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