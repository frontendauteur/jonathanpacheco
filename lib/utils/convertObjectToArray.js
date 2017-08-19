"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (arrayLikeObject) {
  var arr = [];

  arrayLikeObject.forEach(function (object) {
    arr.push(object);
  });
  return arr;
};