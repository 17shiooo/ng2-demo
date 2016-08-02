//const CommonsChunkPlugin = webpack.optimize.CommonsChunkPlugin;
var webpack = require('webpack');
var path = require('path');
module.exports = {
    entry: {
        main: './src/main.ts',
        vendor:'./src/vendor.ts'
    },
    devtool:'eval',
    output: {
        path: __dirname + '/dist',
        filename: '[name].bundle.js'
    },
    resolve: {
        extensions: ['', '.ts', '.js']
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                loader: 'script-loader',
                exclude: /node_modules/
            },
            {
                test: /\.(?!(ts|html|css|js))\w*$/,
                loader: "url-loader"
            },
            {
                test: /\.ts$/,
                loaders: ['awesome-typescript-loader', 'angular2-template-loader'],
                exclude: [/\.(spec|e2e)\.ts$/]},
            {
                test: /\.css$/,
                loaders: ['to-string-loader', 'css-loader']
            },
            {
                test: /\.html$/,
                loader: 'raw-loader',
            },
            {
                test: /\.woff(2)?(\?v=.+)?$/,
                loader: 'url-loader?limit=10000&mimetype=application/font-woff'
            },

            {
                test: /\.(ttf|eot|svg)(\?v=.+)?$/,
                loader: 'file-loader'
            },
        ],
        //noParse: [ /angular2\/bundles\/.+/ ]
    },
    devServer: {
        historyApiFallback: true
    },
    plugins: [
        //new webpack.optimize.CommonsChunkPlugin("common.bundle.js"),
    ]
}













