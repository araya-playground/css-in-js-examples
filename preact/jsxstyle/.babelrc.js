const path = require("path");
module.exports = {
  presets: [
    [
      "@babel/env",
      {
        targets: {
          node: true,
        },
      },
    ],
    [
      "@babel/preset-typescript",
      {
        jsxPragma: "h",
      },
    ],
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
      },
    ],
  ],
  sourceMaps: true,
};
