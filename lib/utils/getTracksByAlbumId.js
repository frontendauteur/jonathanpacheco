'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (albumId, db) {
  return db.objects('Track').filtered('album.id = \'' + albumId + '\'');
};