const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.dev');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');

const port = 3000;
const app = express();
const compiler = webpack(webpackConfig);

// app.get('/', function (req, res) {
//   res.sendFile(path.join(__dirname, '../src/index.html'));
// });

// fix refresh page 404
app.use(historyApiFallback());

// Tell express to use the webpack-dev-middleware and use the webpack.config.js
// configuration file as a base.
app.use(webpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
}));

app.use(webpackHotMiddleware(compiler));

app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
