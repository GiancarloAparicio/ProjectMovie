//Firebase
import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseConfig from '../config/firebaseConfig';

//Actions
import {
	statusFormAction,
	currentUserAction,
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
 * @param {string} email 
 * @param {string} password 
 * @param {function( payload:Action ) } dispatchRegister StatusForm.register
 */
export const registerUser = (email, password, dispatchRegister) => {
	firebase
		.auth()
		.createUserWithEmailAndPassword(email, password)
		.then(() => {

			//Reseteo del formulario de Register
			dispatchRegister(statusFormAction("reset-status"));

			//Confirma el correo de la cuenta del usuario
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
 * @param {function( payload:Action ) } dispatchLogin  StatusForm.login
 */
export const loginUser = (email, password, dispatchLogin) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			//Reseteo del formulario de Login
			dispatchLogin(statusFormAction("reset-status"));
		})
		.catch((error) => {

			console.warn(error.message);
			dispatchLogin(statusFormAction(error.code))
		});
};

/**
 * Observer for Firebase, to update the status
 * @param {function( payload:Action )} dispatchUser UserAction
 */
export const listener = (dispatchUser) => {
	firebase.auth().onAuthStateChanged((user) => {

		//Usamos el localStorage solo para adelantar la carga
		localStorage.setItem('existsUser', user ? true : false);

		//Actualizamos el state del User
		dispatchUser(currentUserAction({
			existsUser: user ? true : false,
			currentUser: user
		}));


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

			//Cerrando el modal de registro
			document.querySelector('#closeRegister').click();
			document.querySelector('#resetRegister').click();
		})
		.catch((error) => {
			console.warn(error.code)
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
			//Usamos el localStorage solo para adelantar la carga
			localStorage.setItem('existsUser', false);

			//Actualizamos el state del User
			dispatchUser(currentUserAction({
				existsUser: false,
				currentUser: null
			}));
		})
		.catch(function (error) {
			console.warn(error);
		});
};