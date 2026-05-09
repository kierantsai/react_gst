const { merge } = require('webpack-merge');
const common = require('./webpack.common.js');
const path = require('path');

var webpack = require('webpack');

module.exports = merge(common, {
    mode: 'development',
    devtool: 'inline-source-map',
    devServer: {
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: '9000',
        hot: true
    },
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: [
                    {
                        loader: 'style-loader'
                    },
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
        new webpack.HotModuleReplacementPlugin(),
    ]
});