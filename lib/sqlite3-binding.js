/*var binary = require('@mapbox/node-pre-gyp');
var path = require('path');
var binding_path = binary.find(path.resolve(path.join(__dirname,'../package.json')));*/
var binding = require('../build/Release/vscode-sqlite3.node');
module.exports = exports = binding;
