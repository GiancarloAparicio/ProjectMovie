import firebase from 'firebase/app';
import 'firebase/auth';
import * as firebaseConfig from '../config/firebaseConfig';

//Store
import store from '../store/index';

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

// export const registerUser = (email, password, dispatch) => {
// 	firebase
// 		.auth()
// 		.createUserWithEmailAndPassword(email, password)
// 		.then(() => {
// 			console.log('Registrado');
// 			// //Usuario creado
// 			// dispatch(existsCurrentUser(true));
// 			// dispatch(statusInputs('reset-status', 'register'));

// 			// //Confirma cuenta de usuario
// 			// confirmEmail(dispatch);
// 		})
// 		.catch(function(error) {
// 			dispatch(statusInputs(error.code, 'register'));
// 		});
// };

export const loginUser = (email, password, dispatch) => {
	firebase
		.auth()
		.signInWithEmailAndPassword(email, password)
		.then(() => {
			console.log(store);
			console.log(dispatch)
			dispatch({
				errors: false,
				inputEmail: true,
				inputPassword: true,
			})
		})
		.catch((error) => {
			console.log(store);
			console.error(error);
		});
};

export const listener = () => {
	firebase.auth().onAuthStateChanged((user) => {
		if (user) {
			// store.dispatch(currentUser(user));
		}
	});
};

export const confirmEmail = () => {
	firebase
		.auth()
		.currentUser.sendEmailVerification()
		.then(() => {
			// //Cerrando el modal de registro
			// let closeModalRegister = document.querySelector('#closeRegister');
			// let restModalRegister = document.querySelector('#resetRegister');
			// closeModalRegister.click();
			// restModalRegister.click();

			// //Actualizar el state
			// localStorage['SESSION'] = 'true';
			// dispatch(existsCurrentUser('true'));
		})
		.catch((error) => {
			console.error(error)
			//dispatch(statusInputs(error.code, 'login'));
		});
};

export const closeUser = () => {
	firebase
		.auth()
		.signOut()
		.then(() => {
			// dispatch(existsCurrentUser(false));
		})
		.catch(function (error) {
			console.warn(error);
		});
};