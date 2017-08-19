'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (file) {
  return _path2.default.join(__dirname, '../../', 'public', 'images', file.originalname);
};

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }