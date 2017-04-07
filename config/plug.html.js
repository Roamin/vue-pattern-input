/**
 * @author rubyisapm
 */

var path = require('path');
var utils=require('../build/utils');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var config=require('./index');
function htmlPlugins(prod) {
  var ejsTemplates=utils.readFilesInDir(path.resolve(__dirname, '../ejs'));
  return ejsTemplates.map(function (file) {
    var filename = path.relative('./ejs/',file).split('.')[0];
    var option={
      filename: path.resolve(__dirname, '../view/' + filename + '.html'),
      template: file,
      inject:false,
      version:+new Date()
    };
    if(prod){
      option.minify= {
        removeComments: true,
        collapseWhitespace: true,
        removeAttributeQuotes: true
      };
      option.chunksSortMode= 'dependency';
    }
    return new HtmlWebpackPlugin(option)
  });
}

module.exports = htmlPlugins;
