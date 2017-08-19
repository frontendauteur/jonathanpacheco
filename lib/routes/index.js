'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _marked = require('marked');

var _marked2 = _interopRequireDefault(_marked);

var _typogr = require('typogr');

var _typogr2 = _interopRequireDefault(_typogr);

var _titleCase = require('./../utils/titleCase');

var _titleCase2 = _interopRequireDefault(_titleCase);

var _getDatabase = require('./../utils/getDatabase');

var _getDatabase2 = _interopRequireDefault(_getDatabase);

var _cloneDataObject = require('./../utils/cloneDataObject');

var _cloneDataObject2 = _interopRequireDefault(_cloneDataObject);

var _convertObjectToArray = require('./../utils/convertObjectToArray');

var _convertObjectToArray2 = _interopRequireDefault(_convertObjectToArray);

var _schema = require('./../schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();

var db = (0, _getDatabase2.default)();
// db.close()

/* GET home page. */
router.get('/', function (req, res, next) {
  var posts = db.objects('Work');
  var tracks = db.objects('Track');
  var albums = (0, _convertObjectToArray2.default)(db.objects('Album')).map(function (album) {
    var newAlbum = (0, _cloneDataObject2.default)(album, _schema.AlbumSchema);
    newAlbum.tracks = album.tracks.sorted('number');
    return newAlbum;
  });

  res.render('index', { title: 'Jonathan Pacheco', posts: posts, albums: albums, tracks: tracks });
});
exports.default = router;