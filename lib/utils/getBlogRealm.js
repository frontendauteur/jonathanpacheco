'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function () {
  return new _realm2.default({
    path: 'music.realm',
    schema: [Schema.TrackSchema, Schema.SubTrackSchema, Schema.AlbumSchema, Schema.ArtistSchema, Schema.TagSchema, Schema.WorkSchema],
    schemaVersion: 4
  });
};

var _realm = require('realm');

var _realm2 = _interopRequireDefault(_realm);

var _schema = require('./../schema');

var Schema = _interopRequireWildcard(_schema);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }