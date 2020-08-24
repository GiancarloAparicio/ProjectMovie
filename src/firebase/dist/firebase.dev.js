"use strict";

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.closeUser = exports.confirmEmail = exports.listener = exports.loginUser = exports.registerUser = exports.startFirebase = void 0;

var _app = _interopRequireDefault(require("firebase/app"));

require("firebase/auth");

var firebaseConfig = _interopRequireWildcard(require("../config/firebaseConfig"));

var _actions = require("../store/actions");

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

//Actions
var startFirebase = function startFirebase() {
  var config = {
    apiKey: firebaseConfig.apiKeyFirebase,
    authDomain: firebaseConfig.authDomainFirebase,
    databaseURL: firebaseConfig.databaseUrlFirebase,
    projectId: firebaseConfig.projectIdFirebase,
    storageBucket: firebaseConfig.storageBucketFirebase,
    messagingSenderId: firebaseConfig.messaginSenderIdFirebase,
    appId: firebaseConfig.appIdFirebase
  };

  _app["default"].initializeApp(config);
};
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchRegister RegisterForm
 */


exports.startFirebase = startFirebase;

var registerUser = function registerUser(email, password, dispatchRegister) {
  _app["default"].auth().createUserWithEmailAndPassword(email, password).then(function () {
    //Reseteo del formulario
    dispatchRegister((0, _actions.statusFormAction)("reset-status")); //Confirma cuenta de usuario

    confirmEmail();
  })["catch"](function (error) {
    console.warn(error.code);
    dispatchRegister((0, _actions.statusFormAction)(error.code));
  });
};
/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchLogin LoginForm
 */


exports.registerUser = registerUser;

var loginUser = function loginUser(email, password, dispatchLogin) {
  _app["default"].auth().signInWithEmailAndPassword(email, password).then(function () {
    console.log(dispatchLogin);
  })["catch"](function (error) {
    console.warn(error.message);
    dispatchLogin((0, _actions.statusFormAction)(error.code));
  });
};
/**
 * 
 * @param {function( payload:Action )} dispatchUser User
 */


exports.loginUser = loginUser;

var listener = function listener(dispatchUser) {
  _app["default"].auth().onAuthStateChanged(function (user) {
    if (user) {
      console.log(dispatchUser, _actions.currentUserAction); //dispatchUser(currentUserAction(user));
    }
  });
};

exports.listener = listener;

var confirmEmail = function confirmEmail() {
  _app["default"].auth().currentUser.sendEmailVerification().then(function () {
    //Cerrando el modal de registro
    var closeModalRegister = document.querySelector('#closeRegister');
    var restModalRegister = document.querySelector('#resetRegister');
    closeModalRegister.click();
    restModalRegister.click(); //Actualizar el state

    localStorage['SESSION'] = 'true';
  })["catch"](function (error) {
    console.warn(error.code);
  });
};

exports.confirmEmail = confirmEmail;

var closeUser = function closeUser() {
  _app["default"].auth().signOut().then(function () {// dispatch(existscurrentUserAction(false));
  })["catch"](function (error) {
    console.warn(error);
  });
};

exports.closeUser = closeUser;