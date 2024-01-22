const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "public"),
    filename: "[name]-[contenthash].bundle.js",
    clean: true,
    assetModuleFilename: "img/[name]-[hash][ext]",
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name]-[contenthash].css",
    }),
  ],
  optimization: {
    minimizer: [`...`, new CssMinimizerPlugin()],
  },
  devServer: {
    port: 3000,
    liveReload: true,
    historyApiFallback: true,
  },
});
