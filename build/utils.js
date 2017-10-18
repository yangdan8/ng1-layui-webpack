'use strict';
const path = require('path');
const config = require('../config');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const resolve = function(dir) {
    return path.join(__dirname, '..', dir);
};

exports.assetsPath = function(_path) {
    const assetsSubDirectory = process.env.NODE_ENV === 'production' ?
        config.build.assetsSubDirectory :
        config.dev.assetsSubDirectory;
    return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
    options = options || {};

    const cssLoader = {
        loader: 'css-loader',
        options: {
            sourceMap: false,
            minimize: process.env.NODE_ENV === 'production'
        }
    };
    // generate loader string to be used with extract text plugin
    function generateLoaders(loader, loaderOptions, extract) {
        const loaders = [cssLoader, {
            loader: 'postcss-loader',
            options: {
                sourceMap: false
            }
        }];
        if (loader) {
            loaders.push({
                loader: loader + '-loader',
                options: Object.assign({}, loaderOptions, {
                    sourceMap: false
                })
            });
        }

        if (extract) {
            return ExtractTextPlugin.extract({
                use: loaders,
                fallback: "style-loader"
            });
        }
        loaders.splice(0, 0, "style-loader");
        return loaders;
    }

    return {
        css: generateLoaders(),
        postcss: generateLoaders(),
        less: generateLoaders('less'),
        sass: generateLoaders('sass', { indentedSyntax: true }),
        scss: generateLoaders('sass'),
        stylus: generateLoaders('stylus'),
        styl: generateLoaders('stylus')
    };
};

exports.styleLoaders = function(options) {
    const output = [];
    const loaders = exports.cssLoaders(options);
    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader,
            exclude: [resolve('src/pages')]
        });
    }

    const loaders2 = exports.cssLoaders(options);
    for (const extension in loaders) {
        const loader = loaders[extension];
        output.push({
            test: new RegExp('\\.' + extension + '$'),
            use: loader,
            include: [resolve('src/pages')]
        });
    }
    return output;
};