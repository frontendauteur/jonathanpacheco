'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.formatPostDate = formatPostDate;
exports.formatPostTimestamp = formatPostTimestamp;
exports.makeJSDate = makeJSDate;
exports.formatDateForInput = formatDateForInput;
exports.secondsToTime = secondsToTime;
exports.timeToSeconds = timeToSeconds;

var _moment = require('moment');

var _moment2 = _interopRequireDefault(_moment);

require('moment-duration-format');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function formatPostDate(timestamp) {
  var date = makeDateObject(timestamp);
  return date.format('MMMM Do, YYYY');
}
function formatPostTimestamp(timestamp) {
  var date = makeDateObject(timestamp);
  return date.format('YYYY-MM-DDTHH:mm:ss.SSSZ');
}
function makeJSDate(timestamp) {
  var date = makeDateObjectFromInput(timestamp);
  return date.toDate();
}
function makeDateObjectFromInput(timestamp) {
  return (0, _moment2.default)(timestamp, 'YYYY-MM-DD');
}
function formatDateForInput(timestamp) {
  var date = makeDateObject(timestamp);
  return date.format('YYYY-MM-DD');
}
function makeDateObject(timestamp) {
  return (0, _moment2.default)(timestamp, 'YYYY-MM-DDTHH:mm:ss.SSSZ');
}
function secondsToTime(seconds) {
  return _moment2.default.duration(seconds, 'seconds').format('m:ss');
}

function timeToSeconds(time) {
  var dateArray = time.split(':');
  return _moment2.default.duration({
    minutes: Number(dateArray[0]),
    seconds: Number(dateArray[1])
  }).asSeconds();
}

/*

YYYY-MM-DDTHH:mm:ss.SSSZ

*/