const path = require('path');
const { merge } = require('webpack-merge');

module.exports = merge(common, {
  mode: 'development',
  devtool: 'eval-source-map', 
  devServer: {
    contentBase: path.join(__dirname, 'public'),
    port: 3000,
    hot: true,
    historyApiFallback: true,
    overlay: {
      warnings: true,
      errors: true,
    }
  },
});
