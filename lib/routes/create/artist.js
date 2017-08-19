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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

/* Post Artist form */
router.post('/', function (_ref, res) {
  var body = _ref.body;
  var name = body.name,
      id = body.id;

  db.write(function () {
    db.create('Artist', {
      name: name,
      id: id || _shortid2.default.generate()
    }, !!id);
  });
  res.redirect('/');
});

/* GET Artist form. */
router.get('/', function (req, res, next) {
  res.render('create/artist');
});

exports.default = router;