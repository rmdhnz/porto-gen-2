const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name].bundle.js",
    clean: true,
    assetModuleFilename: "img/[name][ext]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
    }),
  ],
  devServer: {
    static: {
      directory: path.join(__dirname, "src"),
    },
    port: 3000,
    historyApiFallback: true,
    liveReload: true,
  },
});
