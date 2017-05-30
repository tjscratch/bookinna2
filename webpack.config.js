let path = require("path");
let webpack = require('webpack');
let HtmlWebpackPlugin = require('html-webpack-plugin');
const ETP = require('extract-text-webpack-plugin');
const OpenBrowserPlugin = require('open-browser-webpack-plugin');

module.exports = {
    devtool: 'cheap-module-source-map',
    entry: [
        'webpack-hot-middleware/client?path=http://localhost:3000/__webpack_hmr',
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
        new HtmlWebpackPlugin({
            template: 'client/index.html',
            inject: 'body',
            filename: 'index.html'
        }),
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
    resolve: {
        extensions: ['.js', '.jsx', '.json'],
        modules: ['src', 'node_modules'],
    },
}
