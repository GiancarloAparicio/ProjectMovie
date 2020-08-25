"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.currentUserAction = exports.statusFormAction = void 0;

/**
 * If firebase validation fails, errors are displayed
 * @param { string }  status
 */
var statusFormAction = function statusFormAction(status) {
  switch (status) {
    case "auth/invalid-email":
      return {
        inputEmail: "is-invalid"
      };

    case "auth/wrong-password":
      return {
        inputEmail: "is-valid",
        errorEmail: "",
        inputPassword: "is-invalid",
        errorPassword: "Sorry, the password entered is wrong.  Try another?"
      };

    case "auth/user-not-found":
      return {
        inputEmail: "is-invalid",
        errorEmail: "Sorry, the user entered is incorrect. Try another?"
      };

    case "reset-status":
      return {
        inputEmail: null,
        inputPassword: null,
        errorEmail: null,
        errorPassword: null
      };

    case "auth/email-already-in-use":
      return {
        inputEmail: "is-invalid",
        errorEmail: "Sorry, the user entered is already in use.  Try another?"
      };

    case "auth/too-many-requests":
      return {
        inputEmail: "is-invalid",
        inputPassword: "is-invalid",
        errorEmail: "Sorry, too many incorrect requests. Try again later...",
        errorPassword: "Sorry, too many incorrect requests. Try again later..."
      };

    case "auth/weak-password":
      return {
        inputEmail: "is-valid",
        errorEmail: "",
        inputPassword: "is-invalid",
        errorPassword: "Sorry, the password you entered is very weak. Try another?"
      };
  }
};
/**
 * If the registration is successful, the user 's data is saved
 * @param {object} user 
 * If a user registers or logs in , its value is changed to TRUE and 
 * if it closes session to FALSE
 * @param { boolean}value
 */


exports.statusFormAction = statusFormAction;

var currentUserAction = function currentUserAction(user) {
  return {
    existsUser: user.existsUser,
    currentUser: user.currentUser
  };
};

exports.currentUserAction = currentUserAction;