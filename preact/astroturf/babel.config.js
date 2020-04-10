const path = require('path');
module.exports = {
    presets: [
        "@babel/env",
        [
            "@babel/preset-typescript",
            {
                jsxPragma: "h"
            }
        ]
    ],
    plugins: [
        [
            "@babel/plugin-transform-react-jsx",
            {
                pragma: "h"
            }
        ],
        ["astroturf/plugin", {
            tagName: 'css',
            extension: '.css',
            writeFiles: true,
            getFileName(hostFilePath, opts) {
                const basePath = path.join(__dirname, 'dist', 'sample');
                return `${basePath}-extracted_style${opts.extension}`
            }
        }],
    ],
    sourceMaps: true
}
