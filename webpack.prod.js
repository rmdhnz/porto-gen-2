const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "production",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main-[contenthash].bundle.js",
    clean: true,
    assetModuleFilename: "img/[name]-[hash][ext]",
  },
});
