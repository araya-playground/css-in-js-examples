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
    "@babel/preset-react",
    "linaria/babel",
  ],
  plugins: [
    [
      "@babel/plugin-transform-react-jsx",
      {
        pragma: "h",
      },
    ],
    //     "../node_modules/@babel/plugin-syntax-dynamic-import/lib/index.js",
    //     "../node_modules/@babel/plugin-transform-object-assign/lib/index.js",
    //     [
    //       "../node_modules/@babel/plugin-proposal-decorators/lib/index.js",
    //       {
    //         legacy: true,
    //       },
    //     ],
    //     [
    //       "../node_modules/@babel/plugin-proposal-class-properties/lib/index.js",
    //       {
    //         loose: true,
    //       },
    //     ],
    //     "../node_modules/@babel/plugin-proposal-object-rest-spread/lib/index.js",
    //     "../node_modules/babel-plugin-transform-react-remove-prop-types/lib/index.js",
    //     [
    //       "../node_modules/@babel/plugin-transform-react-jsx/lib/index.js",
    //       {
    //         pragma: "h",
    //         pragmaFrag: "Fragment",
    //       },
    //     ],
    //     [
    //       "../node_modules/fast-async/plugin.js",
    //       {
    //         spec: true,
    //       },
    //     ],
    //     "../node_modules/babel-plugin-macros/dist/index.js",
  ],
  sourceMaps: true,
};
