import {
	CHANGE_USER
} from "../types"

const User = {
	namespaced: true,
	state: {
		existsUser: false,
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
};

export default User;