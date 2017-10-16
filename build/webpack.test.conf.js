'use strict';

const path = require('path'),
    utils = require('./utils'),
    webpack = require('webpack'),
    merge = require('webpack-merge'),
    baseWebpackConfig = require('./webpack.base.conf');

const webpackConfig = merge(baseWebpackConfig, {
    module: {
        rules: utils.styleLoaders()
    },
    devtool: '#inline-source-map',
    resolveLoader: {
        alias: {
            'scss-loader': 'sass-loader'
        }
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env': require('../config/test.env')
        }),
        new ExtractTextPlugin({
            filename: utils.assetsPath('css/[name].[contenthash:8].css')
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendor',
            minChunks: function(module) {
                return (
                    module.resource &&
                    /\.(js|css|sass|scss)$/.test(module.resource) &&
                    module.resource.indexOf(
                        path.join(__dirname, '../node_modules')
                    ) === 0
                )
            }
        })
    ]
});

// no need for app entry during tests
delete webpackConfig.entry;

module.exports = webpackConfig;