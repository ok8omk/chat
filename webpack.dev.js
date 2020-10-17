const path = require("path");
const HTMLPlugin = require("html-webpack-plugin");
const commonConfig = require('./webpack.base.js')

module.exports = {
  ...commonConfig,
  plugins: [
    new HTMLPlugin({
      template: path.join(__dirname, "examples/index.html"),
    }),
  ],
  entry: path.join(__dirname, 'examples/index.tsx'),
};
