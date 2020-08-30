//Types Actions
import {
	CHANGE_USER
} from "../types"

//Helpers
import {
	stringToBoolean
} from "../../helpers/helpers"

/**
 *  existsUser: Depende del localStorage para cargar rapido la pagina, si se modifica no  
 *  importa por que luego firebase cambiara su valor al original, y se utilizara el state 
 *  de Vuex en lugar del localStorage (Asi que solo es para adelantar el inicio)
 */
const User = {
	namespaced: true,
	state: {
		existsUser: stringToBoolean(localStorage.getItem('existsUser')) || false,
		currentUser: {},
	},
	mutations: {
		[CHANGE_USER]: (state, payload) => {
			state.existsUser = payload.existsUser
			state.currentUser = {
				...state.currentUser,
				...payload.currentUser
			};
		},

	},
	actions: {
		[CHANGE_USER]: (store, payload) => {
			store.commit(CHANGE_USER, payload);
		},
	},
	getters: {
		getUserExists: (state) => {
			return stringToBoolean(state.currentUser?.email)
		}
	}
};



export default User;