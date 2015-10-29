path = require('path')

module.exports =

  context: path.join(__dirname, 'src')

  entry: './index'

  output:
    path: path.join(__dirname, 'target')
    filename: 'app.js'
    publicPath: '/'

  resolve:
    extensions: ['', '.js', '.ts', '.tsx']
    root: path.join(__dirname, 'src')

  module:
    loaders: [
      {
        test: /\.tsx?$/
        loader: 'ts-loader'
      }
    ]
