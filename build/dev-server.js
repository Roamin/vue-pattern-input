require('./check-versions')()

var config = require('../config')
if (!process.env.NODE_ENV) {
  process.env.NODE_ENV = JSON.parse(config.dev.env.NODE_ENV)
}

var opn = require('opn')
var path = require('path')
var express = require('express')
var webpack = require('webpack')
var webpackConfig = require('./webpack.dev.conf')
var mock = require('../mock');
// default port where dev server listens for incoming traffic
var port = process.env.PORT || config.dev.port
var host=config.dev.host
// automatically open browser, if not set will be false
var autoOpenBrowser = !!config.dev.autoOpenBrowser
// Define HTTP proxies to your custom API backend
// https://github.com/chimurai/http-proxy-middleware

var app = express()
var compiler = webpack(webpackConfig)

app.get(/^(\/|\/index.html)$/, function(req, res) {
  res.sendFile(path.join(__dirname, '../', 'index.html'));
});

var devMiddleware = require('webpack-dev-middleware')(compiler, {
  publicPath: webpackConfig.output.publicPath,
  quiet: true
})

var hotMiddleware = require('webpack-hot-middleware')(compiler, {
  log: () => {}
})
// force page reload when html-webpack-plugin template changes
compiler.plugin('compilation', function (compilation) {
  compilation.plugin('html-webpack-plugin-after-emit', function (data, cb) {
    hotMiddleware.publish({ action: 'reload' })
    cb()
  })
})

// handle fallback for HTML5 history API
//只有以下两个请求才是html页面请求，其他均不会请求html
app.use(require('connect-history-api-fallback')({
  htmlAcceptHeaders: ['text/html', 'application/xhtml+xml']
}))

// serve webpack bundle output
app.use(devMiddleware)

// enable hot-reload and state-preserving
// compilation error display
app.use(hotMiddleware)

//模拟数据
mock(app);

var index=typeof process.argv[2]!=='undefined' ? config.dev.assetsPublicPath+process.argv[2]+'.html' : '';
var uri = 'http://'+host+':' + port+index;

devMiddleware.waitUntilValid(function () {
  console.log('> Listening at ' + uri + '\n')
})

module.exports = app.listen(port,host, function (err) {
  if (err) {
    console.log(err)
    return
  }

  // when env is testing, don't need open it
  if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
    opn(uri)
  }
})
