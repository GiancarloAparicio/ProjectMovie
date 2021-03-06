"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../types");

var _helpers = require("../../helpers/helpers");

function ownKeys(object, enumerableOnly) { var keys = Object.keys(object); if (Object.getOwnPropertySymbols) { var symbols = Object.getOwnPropertySymbols(object); if (enumerableOnly) symbols = symbols.filter(function (sym) { return Object.getOwnPropertyDescriptor(object, sym).enumerable; }); keys.push.apply(keys, symbols); } return keys; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; if (i % 2) { ownKeys(source, true).forEach(function (key) { _defineProperty(target, key, source[key]); }); } else if (Object.getOwnPropertyDescriptors) { Object.defineProperties(target, Object.getOwnPropertyDescriptors(source)); } else { ownKeys(source).forEach(function (key) { Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key)); }); } } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var User = {
  namespaced: true,
  state: {
    existsUser: (0, _helpers.stringToBoolean)(localStorage.getItem('existsUser')) || false,
    currentUser: {}
  },
  mutations: _defineProperty({}, _types.CHANGE_USER, function (state, payload) {
    state.existsUser = payload.existsUser;
    state.currentUser = _objectSpread({}, state.currentUser, {}, payload.currentUser);
  }),
  actions: _defineProperty({}, _types.CHANGE_USER, function (store, payload) {
    store.commit(_types.CHANGE_USER, payload);
  })
};
var _default = User;
exports["default"] = _default;