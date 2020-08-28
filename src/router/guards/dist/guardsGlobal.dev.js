"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Vuex
var before = function before(to, from, next) {
  if (!_index["default"].state.User.existsUser && !to.matched.some(function (record) {
    return record.meta["public"];
  })) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
};

var _default = before;
exports["default"] = _default;