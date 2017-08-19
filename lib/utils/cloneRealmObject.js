"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (realmObject, schema) {
  return Object.keys(schema.properties).reduce(function (prevVal, currentVal, index, arr) {
    prevVal[currentVal] = realmObject[currentVal];
    return prevVal;
  }, {});
};