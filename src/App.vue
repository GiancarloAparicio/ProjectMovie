<template>
	<div>
		<NavBar>
			<router-link class="nav-link" to="/">Home</router-link>
			<router-link class="nav-link" to="/movie">Movies</router-link>
			<router-link class="nav-link" to="/login">Login</router-link>
		</NavBar>

		<router-view />
		<Footer />
	</div>
</template>

<script>
import NavBar from './partials/NavBar.vue';
import Footer from './partials/Footer.vue';
import { apiUrl } from './config/index';

//Firebase
import { startFirebase } from './firebase/firebase';

export default {
	name: 'App',
	components: { NavBar, Footer },
	data: () => ({
		url: apiUrl,
	}),
	mounted() {
		startFirebase();
	},
};
</script>

<style lang="scss"></style>
