//Router
import Vue from 'vue';
import VueRouter from 'vue-router';

//Routes
import routes from "./routes"

//Vuex
import store from "../store/index"

Vue.use(VueRouter);

const router = new VueRouter({
	mode: 'history',
	base: process.env.BASE_URL,
	routes: routes,
	scrollBehavior() {
		return {
			x: 0,
			y: 0
		}
	},
});

router.beforeEach((to, from, next) => {

	if (!store.state.User.existsUser && !to.matched.some(record => record.meta.public)) {
		next({
			name: 'login'
		})
	} else {
		next()
	}
})


export default router;