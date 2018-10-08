const express = require('express');
const path = require('path');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackConfig = require('../webpack.config.dev');
const webpackHotMiddleware = require('webpack-hot-middleware');
const historyApiFallback = require('connect-history-api-fallback');
const proxy = require('http-proxy-middleware');
const jsonServer = require('json-server');
const multer = require('multer');


const port = 4000;
const app = express();
const compiler = webpack(webpackConfig);
const router = jsonServer.router(path.join(__dirname, 'db.json'));
const tmpPath = path.join(__dirname, '../public');
const tmpUpload = multer({
  dest: tmpPath,
}).single('file');

//for test
app.post('/api/system/login', function(req, res) {
  res.status(201).json({
    "token": "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwidXNlciI6eyJ1c2VyTmFtZSI6Ilh1TWlua2UiLCJ1c2VySUQiOiIxMjM0NTY3Iiwicm9sZSI6IjEyMzQ1NiIsInJlcGxhY2UiOiLniYflr4Tlh4nlpKoifX0.rLkkoh5tej1TwRl2JH8k6EfyiLgkkoPP7b7pltx58Vg",
  });
  // res.status(207).json({
  //   "message": "ERROR:60002:パスワードは過期しました。"
  // });
  // res.status(401).json({
  //   "message": "ERROR:60001:ユーザー名とパスワードは不正です。"
  // });
});

app.delete('/api/job/subjob/script',function(req,res){
  res.status(200).end();
});

app.post('/api/system/master', function(req, res) {
  tmpUpload(req, res, function(err) {
    if(err) {
      res.status(409).json({
        "message": "error",
      });
      return;
    }
    res.status(200).end();
    return;
  });
});

app.post('/api/job/subjob/scripts', function(req, res) {
  tmpUpload(req, res, function(err) {
    if(err) {
      res.status(409).json({
        "message": "error",
      });
      return;
    }
    res.status(200).end();
    return;
  });
});

app.delete('/api/system/logout', function(req, res) {
  res.status(200).end();
});
//rewrite url
app.use('/api', proxy({
  logLevel: 'debug',
  target: 'http://localhost:4000',
  changeOrigin: true,
  ws: true,
  pathRewrite: {
    '^/api': '/mockAPI',
    // '^/api/resource/servers': '/api/resource/servers',
    // '^/api/system/notice': '/api/system/notice',
    // '^/api/system/login': '/api/system/login',
    // '^/api/system/logout': '/api/system/logout',
    // '^/api/system/users/password': '/api/system/users/password',
    // '^/api/system/users': '/api/system/users',
    // '^/api/system/roles/current_role': '/api/system/roles/current_role',
    // '^/api/job/patterns': '/api/job/patterns',
    // '^/api/job/subjobs': '/api/job/subjobs',
    // '^/api/system/checkOtherservers': '/api/system/checkOtherservers',
    // '^/api/system/process': '/api/system/process',
    // '^/api/system/flow': '/api/system/flow',
  },
  // router: {
  //   '/api/resource/servers': proxyServer,
  //   '/api/system/notice': proxyServer,
  //   '/api/system/login': proxyServer,
  //   '/api/system/users/password': proxyServer,
  //   '/api/system/users': proxyServer,
  //   '/api/system/roles/current_role': proxyServer,
  //   '/api/job/patterns': proxyServer,
  //   '/api/job/subjobs': proxyServer,
  //   '/api/system/checkOtherservers': proxyServer,
  //   '/api/system/process': proxyServer,
  //   '/api/system/flow': proxyServer,
  // }
}));
// json-server
app.use(jsonServer.rewriter({
  '/mockAPI/system/notice': '/mockAPI/notice',
  '/mockAPI/system/replacers': '/mockAPI/replacers',
  '/mockAPI/system/users': '/mockAPI/users',
  '/mockAPI/job/subJobs': '/mockAPI/subJobs',
  '/mockAPI/system/users/password': '/mockAPI/passwordInfo',
  '/mockAPI/system/roles/current_role': '/mockAPI/currentRole',
  '/mockAPI/resource/servers': '/mockAPI/servers',
  '/mockAPI/resource/servers/:id': '/mockAPI/servers/:id',
  '/mockAPI/resource/servers/:id/applies': '/mockAPI/applies',
  '/mockAPI/resource/servers/:id/ospatchs': '/mockAPI/ospatchs',
  '/mockAPI/resource/servers/:id/softwares': '/mockAPI/softwares',
  '/mockAPI/system/roles': '/mockAPI/roles',
  '/mockAPI/system/roles/:id': '/mockAPI/roles/:id',
  '/mockAPI/process/applies': '/mockAPI/apply',
  '/mockAPI/process/applies/:id': '/mockAPI/apply/:id',
  '/mockAPI/job/patterns': '/mockAPI/jobPatterns',
  '/mockAPI/job/patterns/:id': '/mockAPI/jobPatterns/:id',
  '/mockAPI/resource/patchs': '/mockAPI/patches',
  '/mockAPI/resource/patchs/:id/ospatch': '/mockAPI/patches/:id',
  '/mockAPI/system/tasks': '/mockAPI/tasks',
  '/mockAPI/job/server/:id/patterns': '/mockAPI/serverPatterns',
  '/mockAPI/system/tasks/:id': '/mockAPI/tasks/:id',
  //'/mockAPI/task/:id/subjob/:id/logs': 'mockAPI/log',
  //'/mockAPI/task/:id/patchDiff': '/api/patchDiff',
  '/mockAPI/resource/uploadsoftwares': '/mockAPI/uploadSoftwares',
  '/mockAPI/process/approves': '/mockAPI/approves',
  '/mockAPI/resource/softwares': '/mockAPI/softList',
}));
app.use('/mockAPI', router);

//static resource request
app.use('/public', express.static(path.join(__dirname, '../public')));

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
