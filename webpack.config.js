const HtmlWebPackPlugin = require("html-webpack-plugin");
module.exports = {
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader"
        }
      },
      {
        test: /\.html$/,
        use: [
          {
            loader: "html-loader"
          }
        ]
      },
      {
        test: /\.jpg$/,
        use: [ 
          {
            loader: "file-loader"
          }
        ]
      },
    ]
  },
  devServer: {
    historyApiFallback: true,
  },
  plugins: [
    new HtmlWebPackPlugin({
      favicon: "./src/assets/favicon.ico",
      template: "./src/index.html",
      filename: "./index.html"
    })
  ]
};
