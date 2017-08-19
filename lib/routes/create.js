'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _work = require('./create/work');

var _work2 = _interopRequireDefault(_work);

var _album = require('./create/album');

var _album2 = _interopRequireDefault(_album);

var _artist = require('./create/artist');

var _artist2 = _interopRequireDefault(_artist);

var _tag = require('./create/tag');

var _tag2 = _interopRequireDefault(_tag);

var _track = require('./create/track');

var _track2 = _interopRequireDefault(_track);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

router.use('/work', _work2.default);
router.use('/album', _album2.default);
router.use('/artist', _artist2.default);
router.use('/tag', _tag2.default);
router.use('/track', _track2.default);

exports.default = router;