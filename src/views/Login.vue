<template>
	<div class="mt-5 mx-auto row container">
		<div class="col-md-6 mx-auto">
			<LoginForm />
		</div>

		<RegisterForm />
	</div>
</template>

<script>
	//Components
	import LoginForm from '../partials/LoginForm';
	import RegisterForm from '../partials/RegisterForm';

	//Vuex
	import { mapGetters } from 'vuex';

	const components = {
		LoginForm,
		RegisterForm,
	};

	const computed = {
		...mapGetters('User', ['getUserExists']),

		changeUser() {
			console.log('oka');
			if (this.getUserExists) {
				this.$router.push({
					name: 'home',
				});
			}
			return this.getUserExists;
		},
	};

	export default {
		name: 'Login',
		components,
		computed,
	};
</script>
