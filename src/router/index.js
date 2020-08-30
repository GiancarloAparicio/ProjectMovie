//Router
import Vue from 'vue';
import VueRouter from 'vue-router';

//Routes
import routes from "./routes"

//Guards
import {
	beforeEnter
} from './guards/guardsGlobal';


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

router.beforeEach(beforeEnter)


export default router;