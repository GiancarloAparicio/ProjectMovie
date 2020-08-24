const LoginForm = {
	namespaced: true,
	state: {
		inputEmail: null,
		inputPassword: null,
		errors: null,
	},
	mutations: {
		changeLogin: (state, payload) => {
			state = {
				...state,
				...payload
			};
		},

	},
	actions: {
		changeLogin: (store, payload) => {
			store.commit('changeLogin', payload);
		},

	},
};

export default LoginForm;