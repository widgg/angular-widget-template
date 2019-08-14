const path = require("path")
const UglifyJsPlugin = require("uglifyjs-webpack-plugin")
const glob = require("glob")

module.exports = {
  mode: 'production',
  entry: {
    "app.js": glob.sync("dist/angular-widget-template/main-es5.js").map(f => path.resolve(__dirname, f)),
  },
  output: {
    filename: "js/app.js",
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
    ],
  },
  plugins: [new UglifyJsPlugin({
    uglifyOptions: {
      output: {
        comments: false
      }
    }
})],
}
