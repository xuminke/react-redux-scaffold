const express = require('express');
const path = require('path');
// const webpack = require('webpack');
const historyApiFallback = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const app = express();

//config correct port & API Proxy before deploy
const port = 4000;
const proxyServer = "http://localhost:8080";

//rewrite url
app.use('/api', proxy({
  logLevel: 'debug',
  target: proxyServer,
  changeOrigin: true,
  ws: true,
  pathRewrite: (path, req) => {
    return path.replace('/api', '/');
  },
}));

// fix refresh page 404
//should set before static dist config
app.use(historyApiFallback({
  index: '/index.html',
  verbose: true,
}));

//index path
app.use(express.static(path.join(__dirname, '../dist')));

//static resource request
app.use('/public', express.static(path.join(__dirname, '../public')));



app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
});
