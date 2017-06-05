let path = require("path");
let webpack = require('webpack');
const ETP = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    devtool: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.jsx'),
        ],
    output: {
        path: path.join(__dirname, 'dist'),
        publicPath: '/',
        filename: 'bundle.js'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new ETP({
            filename: 'styles.css',
            allChunks: true,
        }),
        new OpenBrowserPlugin({ url: 'http://localhost:3000/' }),
        new CopyWebpackPlugin([
            { from: 'client/index.html'},
        ]),
    ],
    module: {
        loaders: [
            {
                test: /\.jsx$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.(css|scss|sass)$/,
                loaders: ['style-loader', 'css-loader?sourceMap', 'postcss-loader']
                },
            {
                test: /\.(jpe|jpg|woff|woff2|eot|ttf|svg|png)(\?.*$|$)/,
                exclude: /node_modules/,
                use:[{
                    loader: 'url-loader?name=/fonts/[name].[ext]'
                }]
            },
        ]
    },
    devServer: {
        inline: true,
        port: 3000
    },
}
