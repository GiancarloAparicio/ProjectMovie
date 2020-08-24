import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseConfig from '../config/firebaseConfig';

//Actions
import {
	statusFormAction,
	currentUserAction
} from "../store/actions"

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
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchRegister RegisterForm
 */
export const registerUser = (email, password, dispatchRegister) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {

			//Reseteo del formulario
			dispatchRegister(statusFormAction("reset-status"));

			//Confirma cuenta de usuario
			confirmEmail();
		})
		.catch(function (error) {
			console.warn(error.code)
			dispatchRegister(statusFormAction(error.code))
		});
};

/**
 * 
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchLogin LoginForm
 */
export const loginUser = (email, password, dispatchLogin) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log(dispatchLogin)
		})
		.catch((error) => {

			console.warn(error.message);
			dispatchLogin(statusFormAction(error.code))
		});
};

/**
 * 
 * @param {function( payload:Action )} dispatchUser User
 */
export const listener = (dispatchUser) => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			console.log(dispatchUser, currentUserAction)
			//dispatchUser(currentUserAction(user));
		}
	});
};

export const confirmEmail = () => {
	firebase
		.auth()
		.currentUser.sendEmailVerification()
		.then(() => {

			//Cerrando el modal de registro
			let closeModalRegister = document.querySelector('#closeRegister');
			let restModalRegister = document.querySelector('#resetRegister');
			closeModalRegister.click();
			restModalRegister.click();

			//Actualizar el state
			localStorage['SESSION'] = 'true';
		})
		.catch((error) => {
			console.warn(error.code)
		});
};

export const closeUser = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// dispatch(existscurrentUserAction(false));
		})
		.catch(function (error) {
			console.warn(error);
		});
};