'use strict';
// core
const path = require('path');
// node_modules
const ExtractTextWebpackPlugin = require('extract-text-webpack-plugin');

const webpackConfig = {
    context: __dirname,
    entry: './index.css',
    output: {
        path: __dirname,
        filename: 'bundle.js',
    },
    module: {
        loaders: [
            {
                test: /[.]css$/,
                loader: ExtractTextWebpackPlugin.extract('css-loader!../index.js'),
            },
         ],
    },
    plugins: [
        new ExtractTextWebpackPlugin('bundle.css')
    ]
};

module.exports = webpackConfig;
