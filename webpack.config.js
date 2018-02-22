const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");

module.exports = env => ({
  entry: ["babel-polyfill", path.resolve(__dirname, "src", "index.js")],
  devtool: "cheap-source-map",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "build.js"
  },
  resolve: {
    modules: [path.resolve(__dirname, "src"), "node_modules"]
  },
  module: {
    rules: [
      { test: /\.js$/, exclude: /node_modules/, use: ["babel-loader"] },
      { test: /\.css$/, use: ["style-loader", "css-loader"] }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: `${__dirname}/public/index.html`
    }),
    new webpack.DefinePlugin({
      "process.env": {
        PRODUCTION: env.production
      }
    })
  ]
});
