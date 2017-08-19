'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _shortid = require('shortid');

var _shortid2 = _interopRequireDefault(_shortid);

var _getDatabase = require('./../../utils/getDatabase');

var _getDatabase2 = _interopRequireDefault(_getDatabase);

var _getDataById = require('./../../utils/getDataById');

var _getDataById2 = _interopRequireDefault(_getDataById);

var _getDataByIds = require('./../../utils/getDataByIds');

var _getDataByIds2 = _interopRequireDefault(_getDataByIds);

var _cloneDataObject = require('./../../utils/cloneDataObject');

var _cloneDataObject2 = _interopRequireDefault(_cloneDataObject);

var _date = require('./../../utils/date');

var _schema = require('./../../schema');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

/* Post Artist form */
router.post('/', function (_ref, res) {
  var body = _ref.body;
  var _body$title = body.title,
      title = _body$title === undefined ? '' : _body$title,
      _body$duration = body.duration,
      duration = _body$duration === undefined ? '0:00' : _body$duration,
      _body$notes = body.notes,
      notes = _body$notes === undefined ? '' : _body$notes,
      _body$altTitle = body.altTitle,
      altTitle = _body$altTitle === undefined ? '' : _body$altTitle,
      _body$number = body.number,
      number = _body$number === undefined ? 0 : _body$number,
      _body$fileUrl = body.fileUrl,
      fileUrl = _body$fileUrl === undefined ? '' : _body$fileUrl,
      _body$spotifyUri = body.spotifyUri,
      spotifyUri = _body$spotifyUri === undefined ? '' : _body$spotifyUri,
      id = body.id;
  var album = body.album,
      _body$tags = body.tags,
      tags = _body$tags === undefined ? [] : _body$tags;


  album = album !== '' ? (0, _getDataById2.default)(album, 'Album', db) : null;

  if (tags.length) {
    if (typeof tags === 'string') {
      tags = [tags];
    }
    tags = (0, _getDataByIds2.default)(tags, 'Tag', db);
  }
  console.log(tags);

  db.write(function () {
    db.create('Track', {
      title: title,
      altTitle: altTitle,
      notes: notes,
      fileUrl: fileUrl,
      spotifyUri: spotifyUri,
      duration: (0, _date.timeToSeconds)(duration),
      number: Number(number),
      album: album,
      tags: tags,
      id: id || _shortid2.default.generate()
    }, !!id);
  });
  res.redirect('/');
});

/* GET Artist form. */
router.get('/', function (req, res, next) {
  res.render('create/track', {
    availableTags: db.objects('Tag'),
    availableAlbums: db.objects('Album')
  });
});
router.get('/:id', function (req, res, next) {
  var data = (0, _getDataById2.default)(req.params.id, 'Track', db);
  data = (0, _cloneDataObject2.default)(data, _schema.TrackSchema);
  data.availableTags = db.objects('Tag');
  data.availableAlbums = db.objects('Album');
  data.duration = (0, _date.secondsToTime)(data.duration);
  console.log(data);
  res.render('create/track', data);
});

exports.default = router;