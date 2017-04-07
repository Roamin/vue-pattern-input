var entryMode={
  pagePacked: true
};
var path = require('path');
var utils=require('../build/utils');
var entryScripts = [];
var entries = {};
if(entryMode.pagePacked){
  entryScripts = utils.readDirsInDir(path.resolve(__dirname, '../src/js/app'));
  entries = {};
  entryScripts.map(function (script) {
    var entry = path.relative(path.resolve(__dirname, '../src/js/app'), script);
    entries[entry] = './src/js/app/' + entry + '/index.js';
  });
}else{
  entryScripts = utils.readFilesInDir(path.resolve(__dirname, '../src/js/app'));
  entries = {};
  entryScripts.map(function (script) {
    var file = path.relative(path.resolve(__dirname, '../src/js/app'),script);
    var fileName=file.split('.')[0];
    entries[fileName] = './src/js/app/' + file;
  });
}

module.exports = entries;
