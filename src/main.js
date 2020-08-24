//Vue
import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';

//Bootstrap
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap';
import 'jquery';
import 'popper.js';

Vue.config.productionTip = false;

new Vue({
	router,
	store,
	render: (h) => h(App),
}).$mount('#app');