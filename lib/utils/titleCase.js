'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (title) {
  var titleRenderer = new _marked2.default.Renderer();

  titleRenderer.paragraph = function (text) {
    return text;
  };

  return _typogr2.default.typogrify((0, _marked2.default)(_typogr2.default.smartypants((0, _titlecase2.default)(title)), {
    renderer: titleRenderer
  }));
};

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _typogr = require('typogr');

var _typogr2 = _interopRequireDefault(_typogr);

var _titlecase = require('titlecase');

var _titlecase2 = _interopRequireDefault(_titlecase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }