////////////////////////////////////////////////////////////////////////////////
// FILE: webpack.config.js
// AUTHOR: David Ruvolo
// CREATED: 2020-09-26
// MODIFIED: 2020-11-18
// PURPOSE: loads dev or prod configuration based on script param `env`
// DEPENDENCIES: see common
// STATUS: working
// COMMENTS: NA
////////////////////////////////////////////////////////////////////////////////

// load
const { CleanWebpackPlugin } = require("clean-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

console.log(path.__dirname)

// configuration
module.exports = {
    mode: "development",
    entry: "./src/index.js",
    output: {
        publicPath: "",
        path: path.resolve(__dirname, "public/"),
        filename: "app.[contenthash].js",
    },
    devServer: {
        port: 8000,
        hot: true,
        writeToDisk: true,
    },
    plugins: [
        // new webpack.ProgressPlugin(),
        new HtmlWebpackPlugin({
            template: "src/index.html",
            filename: "index.html",
        }),
        new MiniCssExtractPlugin({
            filename: "app.[contenthash].css",
        }),
        new CleanWebpackPlugin(),
    ],
    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader",
                exclude: /node_modules/,
            },
            {
                test: /\.(s[ac]ss|css)$/i,
                use: [
                    MiniCssExtractPlugin.loader,
                    "css-loader",
                    "postcss-loader",
                    "sass-loader",
                ]
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [
                    "file-loader"
                ]
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [
                    "file-loader"
                ]
            },
        ]
    },
    resolve: {
        extensions: [
            ".js",
            ".jsx"
        ]
    }
}
