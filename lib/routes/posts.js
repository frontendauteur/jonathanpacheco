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

var _realm = require('realm');

var _realm2 = _interopRequireDefault(_realm);

var _cloneRealmObject = require('./../utils/cloneRealmObject');

var _cloneRealmObject2 = _interopRequireDefault(_cloneRealmObject);

var _getDatabase = require('./../utils/getDatabase');

var _getDatabase2 = _interopRequireDefault(_getDatabase);

var _schema = require('./../schema');

var _titleCase = require('./../utils/titleCase');

var _titleCase2 = _interopRequireDefault(_titleCase);

var _date = require('./../utils/date');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var router = _express2.default.Router();
var db = (0, _getDatabase2.default)();

/* GET users listing. */
router.get('/:slug', function (req, res, next) {
  var post = db.objects('Post').filtered('slug = "' + req.params.slug + '"')[0];
  var newPost = (0, _cloneRealmObject2.default)(post, _schema.PostSchema);

  newPost.title = (0, _titleCase2.default)(newPost.title);
  newPost.content = _typogr2.default.typogrify((0, _marked2.default)(newPost.content));
  newPost.timestamp = {
    datetime: (0, _date.formatPostTimestamp)(newPost.timestamp),
    text: (0, _date.formatPostDate)(newPost.timestamp)
  };
  res.render('post', newPost);
});
exports.default = router;