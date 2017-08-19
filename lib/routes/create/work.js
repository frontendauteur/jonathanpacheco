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

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

/* POST work form */
router.post('/', function (_ref, res) {
  var body = _ref.body;

  db.write(function () {
    var title = body.title,
        medium = body.medium,
        filmType = body.filmType,
        saga = body.saga,
        id = body.id;

    db.create('Work', {
      title: title,
      medium: medium,
      filmType: filmType,
      saga: saga,
      id: id || _shortid2.default.generate()
    }, !!id);
  });
  res.redirect('/');
});

/* GET work form */
router.get('/', function (req, res, next) {
  res.render('createWork');
});
router.get('/:id', function (req, res, next) {
  res.render('createWork', (0, _getDataById2.default)(req.params.id, 'Work', db));
});

exports.default = router;