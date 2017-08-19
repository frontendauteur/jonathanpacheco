'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (ids, type, db) {
  return ids.map(function (id) {
    return (0, _getDataById2.default)(id, type, db);
  });
};

var _getDataById = require('./getDataById');

var _getDataById2 = _interopRequireDefault(_getDataById);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }