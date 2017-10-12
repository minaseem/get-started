/**
 * Created by imamudinnaseem on 5/17/17.
 */

'use strict'

const webpack = require('webpack');
const path = require('path');
const Visualizer = require('webpack-visualizer-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const vueLoaderConfig = require('./vueloader.config');

function resolve(dir) {
    return path.join(__dirname, '..', dir)
}

const PORT = 4000
module.exports = {
    port: PORT,
    webpack: {
        watch: true,
        resolve: {
            extensions: ['.js', '.vue', '.json'],
            alias: {
                '@': resolve('src'),
            },
            symlinks: false
        },
        // devtool: 'eval',
        devtool: '#cheap-module-eval-source-map',
        entry: {
            'app': './src/index'
        },
        devServer: {
            port: PORT,
            headers: {
                'Access-Control-Allow-Origin': "*"
            },
            proxy: {
                '/data': {
                    // target: 'https://shop.polymer-project.org',
                    // target: 'https://api.github.com',
                    target: 'http://localhost:4001',
                    secure: false,
                    pathRewrite: {'^/data': ''}
                }
            }
        },
        output: {
            filename: '[name].js',
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
                {test: /\.css$/, use: ExtractTextPlugin.extract({fallback: "style-loader", use: "css-loader"})},
                {test: /\.svg?name=[name].[ext]$/, loader: 'file-loader'},
                {test: /\.(svg)$/, use: 'file-loader'},
                {test: /\.vue$/, loader: 'vue-loader', options: vueLoaderConfig}
            ]
        },
        plugins: [
            new Visualizer({
                filename: './statistics.html'
            }),
            new ExtractTextPlugin("styles.css"),
            new HtmlWebpackPlugin({
                inject: true,
                template: path.resolve('', 'index.html'),
                minify: {
                    minifyJS: true,
                    minifyCSS: true,
                }
            })
        ]

    }
}
