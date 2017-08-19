"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (id, type, db) {
  return db.objects(type).filtered("id = '" + id + "'")[0];
};