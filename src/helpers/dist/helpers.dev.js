"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.stringToBoolean = void 0;

var stringToBoolean = function stringToBoolean(value) {
  switch (value.toLowerCase().trim()) {
    case "true":
    case "yes":
    case "1":
      return true;

    case "false":
    case "no":
    case "0":
    case null:
    case undefined:
      return false;

    default:
      return value;
  }
};

exports.stringToBoolean = stringToBoolean;