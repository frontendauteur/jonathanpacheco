"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (dataObject, schema) {
  return Object.keys(schema.properties).reduce(function (prevVal, currentVal, index, arr) {
    prevVal[currentVal] = dataObject[currentVal];
    return prevVal;
  }, {});
};