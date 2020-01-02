const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const webpack = require("webpack");
const basePath = __dirname;
const indexInput = "src/template/index.html";
const indexOutput = "index.html";
const distPath = "dist";
/* npx webpack  --entry ./index.js  --output ./bundle.js --mode development */
module.exports = {
  entry: {
    home: path.resolve(basePath, "src/js/index.js")
    //precio: path.resolve(basePath, "../src/js/precio.js"),
    //contacto: path.resolve(basePath, "../src/js/contacto.js")
  },
  mode: "development",
  devServer: {
    contentBase: path.resolve(basePath, distPath),
    //host: "0.0.0.0",
    port: 8080,

    compress: true,
    hot: true,
    inline: true,
    open: true
  },
  output: {
    path: path.resolve(basePath, distPath),
    filename: "js/[name].js" /*nombre de bundel */
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: "babel-loader",
        exclude: "/node_modules/"
      },
      {
        test: /\.css$/,
        use: [
          // {
          //   loader: MiniCssExtractPlugin.loader
          // },
          "style-loader",
          "css-loader"
        ]
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      hash: true,
      title: "plugins",
      template: path.resolve(basePath, indexInput),
      filename: indexOutput,
      chunks: ["home"],
      templateParameters: {
        titulo: "Portafolio",
        encabezamiento: "Hola Mundo desde Webpack"
      }
    })
    // new MiniCssExtractPlugin({
    //   filename: "css/[hash][name].css"
    // })
  ]
};
