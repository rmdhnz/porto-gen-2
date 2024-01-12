const path = require("path");
const { merge } = require("webpack-merge");
const config = require("./webpack.config");
module.exports = merge(config, {
  mode: "development",
  devtool: false,
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "main.bundle.js",
    clean: true,
  },
  devServer: {
    port: 3000,
    liveReload: true,
  },
});
