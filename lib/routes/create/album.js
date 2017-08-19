'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _multer = require('multer');

var _multer2 = _interopRequireDefault(_multer);

var _getDatabase = require('./../../utils/getDatabase');

var _getDatabase2 = _interopRequireDefault(_getDatabase);

var _getDataById = require('./../../utils/getDataById');

var _getDataById2 = _interopRequireDefault(_getDataById);

var _getArtworkPath = require('./../../utils/getArtworkPath');

var _getArtworkPath2 = _interopRequireDefault(_getArtworkPath);

var _date = require('./../../utils/date');

var _cloneRealmObject = require('./../../utils/cloneRealmObject');

var _cloneRealmObject2 = _interopRequireDefault(_cloneRealmObject);

var _schema = require('./../../schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var upload = (0, _multer2.default)();
var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

/* POST Album form */
router.post('/', upload.single('artwork'), function (req, res) {
  var file = req.file;

  if (file) {
    _fs2.default.writeFile((0, _getArtworkPath2.default)(file), file.buffer, function (err) {
      if (err) {
        writeAlbum(req);
      } else {
        writeAlbum(req, _path2.default.join('images', file.originalname));
      }
    });
  } else {
    writeAlbum(req);
  }
  res.redirect('/');
});

/* GET Album form */
router.get('/', function (req, res, next) {
  res.render('createAlbum', {
    availableWorks: db.objects('Work'),
    availableArtists: db.objects('Artist')
  });
});
router.get('/:id', function (req, res, next) {
  var data = (0, _getDataById2.default)(req.params.id, 'Album', db);
  data = (0, _cloneRealmObject2.default)(data, _schema.AlbumSchema);
  data.availableWorks = db.objects('Work');
  data.availableArtists = db.objects('Artist');
  data.releaseDate = (0, _date.formatDateForInput)(data.releaseDate);
  res.render('createAlbum', data);
});

function writeAlbum(_ref) {
  var body = _ref.body;
  var artwork = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : '';
  var title = body.title,
      description = body.description,
      duration = body.duration,
      id = body.id;
  var work = body.work,
      artist = body.artist,
      releaseDate = body.releaseDate;


  work = work !== '' ? (0, _getDataById2.default)(work, 'Work', db) : null;
  artist = artist !== '' ? (0, _getDataById2.default)(artist, 'Artist', db) : null;
  releaseDate = releaseDate !== '' ? (0, _date.makeJSDate)(releaseDate) : '';

  db.write(function () {
    db.create('Album', {
      title: title,
      description: description,
      duration: Number(duration),
      releaseDate: releaseDate,
      artwork: artwork,
      work: work,
      artist: artist,
      id: id || _shortid2.default.generate()
    }, !!id);
  });
}

exports.default = router;