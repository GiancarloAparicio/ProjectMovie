<template>
	<div>
		<NavBar>
			<router-link class="nav-link" to="/">Home</router-link>
			<router-link class="nav-link" to="/movies">Movies</router-link>
		</NavBar>

		<router-view />
		<Footer />
	</div>
</template>

<script>
import NavBar from './components/NavBar.vue';
import Footer from './components/Footer.vue';
import { API_URL } from './config/index';

export default {
	name: 'App',
	components: { NavBar, Footer },
	data: () => ({
		url: API_URL,
	}),
};
</script>

<style lang="scss"></style>
