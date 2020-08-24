const User = {
	namespaced: true,
	state: {
		user: {},
	},
	mutations: {
		changeUser: (state, payload) => {
			state.user = {
				...state.user,
				...payload
			};
		},
	},
	actions: {
		changeUser: (store, payload) => {
			store.commit('user', payload);
		},
	},
};

export default User;