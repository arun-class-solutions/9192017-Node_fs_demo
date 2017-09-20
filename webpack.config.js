const path = require("path");

module.exports = {
  target: "node",
  entry: "./index.js",
  output: {
    path: path.join(__dirname, "dist"),
    filename: "index.bundle.js"
  },
  module: {
    loaders: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: "babel-loader"
    }]
  }
}
