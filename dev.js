const {resolve} = require("path");
const webpack = require("webpack");

module.exports = function(env) {
  return {
    entry: [
      "react-hot-loader/patch",
      // activate HMR for React
      "webpack-dev-server/client?http://localhost:8080",
      // bundle the client for webpack-dev-server
      // and connect to the provided endpoint
      "webpack/hot/only-dev-server",
      // bundle the client for hot reloading
      // only- means to only hot reload for successful updates
      // the entry point of our app
      "./index.js"
    ],
    output: {
      filename: "bundle.js",
      // the output bundle
      path: resolve(__dirname, "dist"),
      // necessary for HMR to know where to load the hot update chunks
      publicPath: "/"
    },
    context: resolve(__dirname, "src"),
    devtool: 'inline-source-map',
    devServer: {
      hot: true,
      // enable HMR on the server
      contentBase: resolve(__dirname, "dist"),
      // match the output path
      // match the output `publicPath`
      publicPath: "/"
    },
    module: {
      rules: [
        {test: /\.(js|jsx)$/, use: ["babel-loader"], exclude: /node_modules/},
        {
          test: /\.scss$/,
          use: [
            "style-loader",
            "css-loader?modules",
            "postcss-loader",
            "sass-loader"
          ]
        }
      ]
    },
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      // enable HMR globally
      // prints more readable module names in the browser console on HMR updates
      new webpack.NamedModulesPlugin()
    ],
    resolve: {
      alias: {
        container: resolve(__dirname, "src/container"),
        grid: resolve(__dirname, "src/components/grid/Grid.jsx"),
        header: resolve(__dirname, "src/components/header/Header.jsx"),
        actionbar: resolve(__dirname, "src/components/actionbar/Actionbar.jsx"),
        navbar: resolve(__dirname, "src/core/navbar"),
        dropdown: resolve(__dirname, "src/core/dropdown"),
        buttongroup: resolve(__dirname, "src/core/buttongroup/Buttongroup.jsx"),
        select: resolve(__dirname, "src/core/select/Select.jsx"),
        button: resolve(__dirname, "src/core/button/Button.jsx"),
        card: resolve(__dirname, "src/core/card"),
        sidenav: resolve(__dirname, "src/core/sidenav/Sidenav.jsx"),
        sass: resolve(__dirname, "src/sass"),
        utils: resolve(__dirname, "src/utils")
      }
    }
  };
};
