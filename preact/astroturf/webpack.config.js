const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");

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
  plugins: [new MiniCSSExtractPlugin()],
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [MiniCSSExtractPlugin.loader, "astroturf/css-loader"],
      },
      // astroturf works out of the box with typescript (.ts or .tsx files).
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "astroturf/loader"],
      },
    ],
  },
};
