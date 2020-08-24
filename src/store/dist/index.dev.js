"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _LoginForm = _interopRequireDefault(require("./modules/LoginForm"));

var _RegisterForm = _interopRequireDefault(require("./modules/RegisterForm"));

var _User = _interopRequireDefault(require("./modules/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modules
_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  modules: {
    RegisterForm: _RegisterForm["default"],
    LoginForm: _LoginForm["default"],
    User: _User["default"]
  }
});
var _default = store;
exports["default"] = _default;