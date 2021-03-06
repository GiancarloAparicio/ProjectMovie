"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../types");

var _mutations, _actions;

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var StatusForm = {
  namespaced: true,
  state: {
    register: {
      inputEmail: null,
      inputPassword: null,
      errorEmail: null,
      errorPassword: null
    },
    login: {
      inputEmail: null,
      inputPassword: null,
      errorEmail: null,
      errorPassword: null
    }
  },
  mutations: (_mutations = {}, _defineProperty(_mutations, _types.CHANGE_REGISTER, function (state, payload) {
    state.register = _objectSpread({}, state.register, {}, payload);
  }), _defineProperty(_mutations, _types.CHANGE_LOGIN, function (state, payload) {
    state.login = _objectSpread({}, state.login, {}, payload);
  }), _mutations),
  actions: (_actions = {}, _defineProperty(_actions, _types.CHANGE_REGISTER, function (store, payload) {
    store.commit(_types.CHANGE_REGISTER, payload);
  }), _defineProperty(_actions, _types.CHANGE_LOGIN, function (store, payload) {
    store.commit(_types.CHANGE_LOGIN, payload);
  }), _actions)
};
var _default = StatusForm;
exports["default"] = _default;