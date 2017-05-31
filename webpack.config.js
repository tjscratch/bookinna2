var path = require("path");
var webpack = require('webpack');
const ETP = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    // devtools: 'eval-source-map',
    entry: [
        'webpack-hot-middleware/client',
        path.join(__dirname, '/client/index.js'),
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
    ],
    module: {
        loaders: [
            {
                test: /\.js$/,
                include: path.join(__dirname, 'client'),
                loaders: ['react-hot-loader', 'babel-loader']
            },
            {
                test: /\.(css|scss|sass)$/,
                loaders: ['style-loader', 'css-loader?sourceMap']
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
