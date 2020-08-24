import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import LoginForm from './modules/LoginForm';
import User from './modules/User';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		LoginForm,
		User,
	},
});

export default store;