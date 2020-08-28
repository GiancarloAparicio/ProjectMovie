"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _vue = _interopRequireDefault(require("vue"));

var _vueRouter = _interopRequireDefault(require("vue-router"));

var _routes = _interopRequireDefault(require("./routes"));

var _index = _interopRequireDefault(require("../store/index"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Router
//Routes
//Vuex
_vue["default"].use(_vueRouter["default"]);

var router = new _vueRouter["default"]({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: _routes["default"],
  scrollBehavior: function scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  }
});
router.beforeEach(function (to, from, next) {
  if (!_index["default"].state.User.existsUser && !to.matched.some(function (record) {
    return record.meta["public"];
  })) {
    next({
      name: 'login'
    });
  } else {
    next();
  }
});
var _default = router;
exports["default"] = _default;