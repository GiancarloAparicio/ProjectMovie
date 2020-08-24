import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import LoginForm from './modules/LoginForm';
import RegisterForm from "./modules/RegisterForm"
import User from './modules/User';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		RegisterForm,
		LoginForm,
		User,

	},
});

export default store;