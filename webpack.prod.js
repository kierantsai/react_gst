const webpack = require('webpack');
const { merge } = require('webpack-merge');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const WorkboxPlugin = require('workbox-webpack-plugin');
const common = require('./webpack.common.js');


module.exports = merge(common, {
    mode: 'production',
    devtool: 'source-map',
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    {
                        loader: 'css-loader',
                        options: {
                            modules: true,
                        }
                    }
                ]
            },
        ]
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify('production')
        }),
        new MiniCssExtractPlugin(),
        new WorkboxPlugin.GenerateSW({
            clientsClaim: true,
            skipWaiting: true,
            maximumFileSizeToCacheInBytes: 10 * 1024 * 1024
        })
    ]
});