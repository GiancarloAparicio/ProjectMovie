const LoginForm = {
	namespace: true,
	state: {
		inputEmail: null,
		inputPassword: null,
		errors: null,
	},
	mutations: {
		inputEmail: (state, payload) => {
			state.inputEmail = payload;
		},
		inputPassword: (state, payload) => {
			state.inputPassword = payload;
		},
		errors: (state, payload) => {
			state.errors = payload;
		},
	},
	actions: {
		inputEmailAction: (store, payload) => {
			store.commit('inputEmail', payload);
		},
		inputPasswordAction: (store, payload) => {
			store.commit('inputPassword', payload);
		},
		errorsAction: (store, payload) => {
			store.commit('errors', payload);
		},
	},
};

export default LoginForm;
