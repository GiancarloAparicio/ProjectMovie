"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _types = require("../types");

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

var LoginForm = {
  namespaced: true,
  state: {
    inputEmail: null,
    inputPassword: null,
    errorEmail: null,
    errorPassword: null
  },
  mutations: _defineProperty({}, _types.CHANGE_LOGIN, function (state, payload) {
    state.inputEmail = payload.inputEmail || state.inputEmail;
    state.inputPassword = payload.inputPassword || state.inputPassword;
    state.errorEmail = payload.errorEmail || state.errorEmail;
    state.errorPassword = payload.errorPassword || state.errorPassword;
  }),
  actions: _defineProperty({}, _types.CHANGE_LOGIN, function (store, payload) {
    store.commit(_types.CHANGE_LOGIN, payload);
  })
};
var _default = LoginForm;
exports["default"] = _default;