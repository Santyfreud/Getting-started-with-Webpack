const path = require('path')

module.exports = {
  entry: {
    about: path.resolve(__dirname, './src/about.js'),
    contact: path.resolve(__dirname, './src/contact.js'),
  },
  output: {
    path: path.resolve(__dirname, './dist'),
    filename: "[name].bundle.js",
  },

  optimization: {
    splitChunks: {
        chunks: "all"
    }
  },

  devServer: {
    static: {
      directory: path.join(__dirname, './dist'),
    },
    compress: true,
    port: 9000,
  },

  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /(node_modules)/,
            use: {
                loader: "babel-loader",
                options: {
                    presets: ["@babel/preset-env", "@babel/preset-react"]
                }
            }
        },
        {
            test: /\.css$/,
            use: [
                {loader: "style-loader"},
                {loader: "css-loader"}
            ]
        },
        {
            test: /\.(svg | png | jpg)$/,
            use: [
                {loader: "url-loader"},
            ]
        }
    ]
  }
}