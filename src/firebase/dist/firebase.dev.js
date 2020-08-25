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

//Firebase
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
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchRegister StatusForm.register
 */


exports.startFirebase = startFirebase;

var registerUser = function registerUser(email, password, dispatchRegister) {
  _app["default"].auth().createUserWithEmailAndPassword(email, password).then(function () {
    //Reseteo del formulario de Register
    dispatchRegister((0, _actions.statusFormAction)("reset-status")); //Confirma el correo de la cuenta del usuario

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
 * @param {function( payload:Action ) } dispatchLogin  StatusForm.login
 */


exports.registerUser = registerUser;

var loginUser = function loginUser(email, password, dispatchLogin) {
  _app["default"].auth().signInWithEmailAndPassword(email, password).then(function () {
    //Reseteo del formulario de Login
    dispatchLogin((0, _actions.statusFormAction)("reset-status"));
  })["catch"](function (error) {
    console.warn(error.message);
    dispatchLogin((0, _actions.statusFormAction)(error.code));
  });
};
/**
 * Observer for Firebase, to update the status
 * @param {function( payload:Action )} dispatchUser UserAction
 */


exports.loginUser = loginUser;

var listener = function listener(dispatchUser) {
  _app["default"].auth().onAuthStateChanged(function (user) {
    dispatchUser((0, _actions.currentUserAction)({
      existsUser: user ? true : false,
      currentUser: user
    }));
  });
};
/**
 * Send a message to validate your E-mail account
 */


exports.listener = listener;

var confirmEmail = function confirmEmail() {
  _app["default"].auth().currentUser.sendEmailVerification().then(function () {
    //Cerrando el modal de registro
    document.querySelector('#closeRegister').click();
    document.querySelector('#resetRegister').click();
  })["catch"](function (error) {
    console.warn(error.code);
  });
};
/**
 * Function in charge of closing the session of Firebase
 * @param {function( payload:Action )} dispatchUser  UserAction
 */


exports.confirmEmail = confirmEmail;

var closeUser = function closeUser(dispatchUser) {
  _app["default"].auth().signOut().then(function () {
    dispatchUser((0, _actions.currentUserAction)({
      existsUser: false,
      currentUser: null
    }));
  })["catch"](function (error) {
    console.warn(error);
  });
};

exports.closeUser = closeUser;