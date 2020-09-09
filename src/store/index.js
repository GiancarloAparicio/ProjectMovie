import Vue from 'vue';
import Vuex from 'vuex';

// Modules
import StatusForm from './modules/StatusForm';
import User from './modules/User';

Vue.use(Vuex);

const store = new Vuex.Store({
	modules: {
		StatusForm,
		User,
	},
});

export default store;
