const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
const JsxstylePlugin = require("jsxstyle-webpack-plugin");

module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "node",
  entry: path.join(__dirname, "src/index.tsx"),
  output: {
    path: path.join(__dirname, "dist"),
    filename: "[name].js",
  },
  resolve: {
    extensions: [".ts", ".tsx", ".json", ".js", ".jsx"],
    alias: {
      react: "preact",
    },
  },
  plugins: [new MiniCSSExtractPlugin(), new JsxstylePlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "css-loader"],
      },
      {
        test: /\.tsx?$/,
        use: ["babel-loader", JsxstylePlugin.loader],
      },
    ],
  },
};
