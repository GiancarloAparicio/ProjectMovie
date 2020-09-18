//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseConfig from '../config/firebaseConfig';

//Actions
import { statusFormAction, currentUserAction } from '../store/actions';

export const startFirebase = () => {
	const config = {
		apiKey: firebaseConfig.apiKeyFirebase,
		authDomain: firebaseConfig.authDomainFirebase,
		databaseURL: firebaseConfig.databaseUrlFirebase,
		projectId: firebaseConfig.projectIdFirebase,
		storageBucket: firebaseConfig.storageBucketFirebase,
		messagingSenderId: firebaseConfig.messaginSenderIdFirebase,
		appId: firebaseConfig.appIdFirebase,
	};

	firebase.initializeApp(config);
};

/**
 * @param {string} email
 * @param {string} password
 * @param {function( payload:Action ) } dispatchRegister StatusForm.register
 */
export const registerUser = (email, password, dispatchRegister) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {
			// Closing the registration modal
			document.querySelector('#closeRegister').click();
			document.querySelector('#resetRegister').click();

			//Resetting the registration form
			dispatchRegister(statusFormAction('reset-status'));

			//Confirm the email of the user's account
			confirmEmail();
		})
		.catch(function(error) {
			console.warn(error.code);
			dispatchRegister(statusFormAction(error.code));
		});
};

/**
 *
 * @param {string} email
 * @param {string} password
 * @param {function( payload:Action ) } dispatchLogin  StatusForm.login
 */
export const loginUser = (email, password, dispatchLogin) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			//Resetting the Login form
			dispatchLogin(statusFormAction('reset-status'));
		})
		.catch((error) => {
			console.warn(error.message);
			dispatchLogin(statusFormAction(error.code));
		});
};

/**
 * Observer for Firebase, to update the status
 * @param {function( payload:Action )} dispatchUser UserAction
 */
export const listener = (dispatchUser) => {
	firebase.auth().onAuthStateChanged((user) => {
		// We use the localStorage only to advance the load
		localStorage.setItem('existsUser', user ? true : false);

		// We update the User's state
		dispatchUser(
			currentUserAction({
				existsUser: user ? true : false,
				currentUser: user,
			})
		);
	});
};

/**
 * Send a message to validate your E-mail account
 */
export const confirmEmail = () => {
	firebase
		.auth()
		.currentUser.sendEmailVerification()
		.then(() => {
			//
		})
		.catch((error) => {
			console.warn(error.code);
		});
};

/**
 * Function in charge of closing the session of Firebase
 * @param {function( payload:Action )} dispatchUser  UserAction
 */
export const closeUser = (dispatchUser) => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// We use the localStorage only to advance the loading of the page
			localStorage.setItem('existsUser', false);

			// We update the User's state
			dispatchUser(
				currentUserAction({
					existsUser: false,
					currentUser: null,
				})
			);
		})
		.catch(function(error) {
			console.warn(error);
		});
};
