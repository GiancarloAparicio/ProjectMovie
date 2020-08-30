"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beforeEnterLogin = void 0;

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Vuex
var beforeEnterLogin = function beforeEnterLogin(to, from, next) {
  if (_index["default"].state.User.existsUser) {
    next({
      name: 'home'
    });
  } else {
    next();
  }
};

exports.beforeEnterLogin = beforeEnterLogin;