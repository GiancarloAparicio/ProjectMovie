import {
	CHANGE_LOGIN
} from "../types"
const LoginForm = {
	namespaced: true,
	state: {
		inputEmail: null,
		inputPassword: null,
		errorEmail: null,
		errorPassword: null,
	},
	mutations: {
		[CHANGE_LOGIN]: (state, payload) => {
			state.inputEmail = payload.inputEmail || state.inputEmail
			state.inputPassword = payload.inputPassword || state.inputPassword
			state.errorEmail = payload.errorEmail || state.errorEmail
			state.errorPassword = payload.errorPassword || state.errorPassword
		},
	},
	actions: {
		[CHANGE_LOGIN]: (store, payload) => {
			store.commit(CHANGE_LOGIN, payload);
		},

	},
};

export default LoginForm;