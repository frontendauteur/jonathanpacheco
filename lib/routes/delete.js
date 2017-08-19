'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = undefined;

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _getDatabase = require('./../utils/getDatabase');

var _getDatabase2 = _interopRequireDefault(_getDatabase);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

router.get('/work/:id', function (req, res, next) {
  db.write(function () {
    var work = db.objects('Work').filtered('id = \'' + req.params.id + '\'')[0];
    db.delete(work);
  });
  res.redirect('/');
});
router.get('/album/:id', function (req, res, next) {
  db.write(function () {
    var album = db.objects('Album').filtered('id = \'' + req.params.id + '\'')[0];
    db.delete(album);
  });
  res.redirect('/');
});
router.get('/track/:id', function (req, res, next) {
  db.write(function () {
    var track = db.objects('Track').filtered('id = \'' + req.params.id + '\'')[0];
    db.delete(track);
  });
  res.redirect('/');
});

exports.default = router;