const User = {
	namespace: true,
	state: {
		user: {},
	},
	mutations: {
		user: (state, payload) => {
			state.user = payload;
		},
	},
	actions: {
		userAction: (store, payload) => {
			store.commit('user', payload);
		},
	},
};

export default User;
