var proxy = require("express-http-proxy");
var mockData = require("./define");
var apiProxy = function () {
  if (mockData.define.isProxy) {
    return mockData.define.proxies.map(function(item){
      return proxy(item.domain, {
        forwardPath: function (req, res) {
          return req._parsedUrl.path
        }
      });
    })
  } else {
    return function (req, res, next) {
      if (req.baseUrl) {
        res.json(mockData.getInterFace(req.baseUrl));
      } else {
        res.json({
          "msg": "nodata"
        });
      }
    };
  }
}();

module.exports = function (app) {
  //模拟数据
  if (mockData.define.isProxy) {
    mockData.define.proxies.map(function(item,index){
      app.use(item.matchPath, apiProxy[index]);
    });
  } else {
    var keys = mockData.interFaces.keys();
    for (var key of keys) {
      app.use(key, apiProxy);
    }
  }
};
