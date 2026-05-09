const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');
var webpack = require('webpack');

module.exports = {
    entry: "./app/index.js",
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js',
        clean: true
    },
    optimization: {
        splitChunks: {
            chunks: 'all'
        }
    },
    module: {
        rules: [
            {
                test: /\.(woff|woff2|eot|ttf|svg)$/,
                use: [ 'file-loader']
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin({
            title: 'GST Calculator',
            template: './app/index.html',
            favicon: './public/favicon.ico',
            inject: true
        }),
        new CopyPlugin({
            patterns: [
                {
                    from: './public/manifest.json',
                    to: './manifest.json'
                },
                {
                    from: './public/gst.png',
                    to: './gst.png'
                }
            ]
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery'
        })
    ]
};