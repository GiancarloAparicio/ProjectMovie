"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vuex = _interopRequireDefault(require("vuex"));

var _StatusForm = _interopRequireDefault(require("./modules/StatusForm"));

var _User = _interopRequireDefault(require("./modules/User"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

// Modules
_vue["default"].use(_vuex["default"]);

var store = new _vuex["default"].Store({
  modules: {
    StatusForm: _StatusForm["default"],
    User: _User["default"]
  }
});
var _default = store;
exports["default"] = _default;