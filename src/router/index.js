//Router
import Vue from 'vue';
import VueRouter from 'vue-router';

//Vuex
import store from "../store/index"

Vue.use(VueRouter);

const routes = [{
		path: '*',
		name: 'Ruta404',
		component: () =>
			import('../views/Ruta404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: () => import('../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import('../views/Login.vue'),
	},
	{
		path: '/movie',
		name: 'Movie',
		component: () =>
			import('../views/Movie.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

router.beforeEach((to, from, next) => {

	if (!store.state.User.existsUser) {
		next()
	}

	console.log(from)
	console.log(to)

	console.log(store.state.User.existsUser)
	next()
})


export default router;