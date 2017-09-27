/**
 * Created by imamudinnaseem on 5/17/17.
 */

'use strict'

const webpack = require('webpack')
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const WebpackCleanupPlugin = require('webpack-cleanup-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CompressionPlugin = require('compression-webpack-plugin');

const PORT = 3000;
module.exports = {
    port: PORT,
    webpack: {
        devtool: false,
        entry: {
            'app': './src/index',
        },
        devServer: {},
        output: {
            filename: '[name].[chunkhash].js',
            path: path.resolve(__dirname + '/..', 'dist')
        },
        module: {
            rules: [
                {test: /\.js$/, exclude: /node_modules/, loader: 'babel-loader'},
                {
                    test: /\.css$/,
                    exclude: '/node_modules/',
                    use: ExtractTextPlugin.extract({
                        fallback: [{loader: 'style-loader',}],
                        use: [
                            {loader: 'css-loader', options: {},},
                            {loader: 'postcss-loader',}
                        ],
                    }),
                }
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({inject: true, template: path.resolve('', 'index.html')}),
            new webpack.ProvidePlugin({"React": "react"}),
            new webpack.optimize.UglifyJsPlugin({minimize: true}),
            new WebpackCleanupPlugin(),
            new ExtractTextPlugin("styles.[contenthash].css"),
            new CompressionPlugin({algorithm: 'gzip', test: /\.js$|\.css$/})
        ]
    }
}

