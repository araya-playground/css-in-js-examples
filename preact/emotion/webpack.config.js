const path = require("path");
const MiniCSSExtractPlugin = require("mini-css-extract-plugin");
module.exports = {
  mode: process.env.NODE_ENV || "development",
  target: "node",
  entry: path.resolve("src/astroturf/index.tsx"),
  output: {
    path: path.resolve("dist"),
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
      {
        test: /\.jsx?$/,
        use: ["babel-loader", "astroturf/loader"],
      },
      // astroturf works out of the box with typescript (.ts or .tsx files).
      {
        test: /\.tsx?$/,
        use: ["babel-loader", "astroturf/loader"],
      },
    ],
  },
};
