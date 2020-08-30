<template>
	<form class="container card" @submit.prevent="loginUser">
		<legend>Login User:</legend>
		<InputForm
			type="email"
			v-bind:status="login.inputEmail"
			v-bind:messageStatus="login.errorEmail"
			@value="changeEmail"
			label="Email"
			placeholder="Enter email"
		/>
		<InputForm
			type="password"
			@value="changePassword"
			v-bind:status="login.inputPassword"
			v-bind:messageStatus="login.errorPassword"
			label="Password"
			placeholder="Password"
		/>

		<div class="form-group mx-auto">
			<button type="submit" class="btn btn-success">Enter</button>
			<button type="reset" @click="cancelLogin" class="btn btn-danger m-3">
				Cancel
			</button>
		</div>
	</form>
</template>

<script>
	//Components
	import InputForm from '../components/InputForm.vue';

	//Firebase
	import { loginUser as firebaseLogin } from '../firebase/firebase';

	//Vuex
	import { mapActions, mapState } from 'vuex';
	import { CHANGE_LOGIN } from '../store/types';
	import { statusFormAction } from '../store/actions';

	const components = {
		InputForm,
	};

	const data = () => ({
		email: '',
		password: '',
	});

	const methods = {
		...mapActions('StatusForm', [CHANGE_LOGIN]),

		changePassword(value) {
			this.password = value;
		},
		changeEmail(value) {
			this.email = value;
		},
		loginUser() {
			firebaseLogin(this.email, this.password, this.CHANGE_LOGIN);
		},
		cancelLogin() {
			this.CHANGE_LOGIN(statusFormAction('reset-status'));
		},
	};

	const computed = {
		...mapState('StatusForm', ['login']),
	};

	export default {
		name: 'LoginForm',
		data: data,
		computed: computed,
		components: components,
		methods: methods,
	};
</script>
