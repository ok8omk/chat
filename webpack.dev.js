const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const commonConfig = require('./webpack.base.js')

module.exports = {
  ...commonConfig,
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "examples/src/index.html"),
    }),
  ],
  entry: path.join(__dirname, 'examples/src/index.tsx'),
  output: { path: path.join(__dirname, 'examples/dist') }
};
