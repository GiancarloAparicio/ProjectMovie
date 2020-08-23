import Vue from 'vue';
import VueRouter from 'vue-router';

Vue.use(VueRouter);

const routes = [
	{
		path: '*',
		name: 'Ruta404',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Ruta404.vue'),
	},
	{
		path: '/',
		name: 'Home',
		component: () => import(/* webpackChunkName: "about" */ '../views/Home.vue'),
	},
	{
		path: '/login',
		name: 'Login',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Login.vue'),
	},
	{
		path: '/movie',
		name: 'Movie',
		component: () =>
			import(/* webpackChunkName: "about" */ '../views/Movie.vue'),
	},
];

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes,
});

export default router;
