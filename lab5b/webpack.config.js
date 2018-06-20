const path = require('path');

module.exports = {
  entry: './src/main.js',
  devtool: 'inline-source-map',
  module: {
    rules: [
        {
            test: /\.js$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader',
                options: {
                    presets: [["env", {
                        targets: {
                            browsers: ['> 1%']
                        }
                    }]]
                }
            }
        }
    ]
    
  },
  resolve: {
    extensions: [ '.js', ]
  },
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist')
  }
};