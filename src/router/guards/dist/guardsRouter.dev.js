"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.beforeEnterHome = exports.beforeEnterLogin = void 0;

var _index = _interopRequireDefault(require("../../store/index"));

var _helpers = require("../../helpers/helpers");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Vuex
//Helpers
var beforeEnterLogin = function beforeEnterLogin(to, from, next) {
  var emailUser = (0, _helpers.stringToBoolean)(_index["default"].state.User.currentUser.email);
  console.log(emailUser);

  if (_index["default"].state.User.existsUser && emailUser) {
    next({
      name: 'home'
    });
  } else {
    next();
  }
};

exports.beforeEnterLogin = beforeEnterLogin;

var beforeEnterHome = function beforeEnterHome(to, from, next) {
  if (_index["default"].state.User.currentUser) {
    next();
  } else {
    next({
      name: 'login'
    });
  }
};

exports.beforeEnterHome = beforeEnterHome;