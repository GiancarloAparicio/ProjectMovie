<template>
	<form class="container card " @submit.prevent="loginUser">
		<legend>Login User:</legend>
		<InputForm
			type="email"
			@value="changeEmail"
			label="Email"
			placeholder="Enter email"
		/>
		<InputForm
			type="password"
			@value="changePass"
			label="Password"
			placeholder="Password"
		/>

		<div class="form-group mx-auto">
			<button type="submit" class="btn btn-success ">Enter</button>
			<button type="reset" class="btn btn-danger m-3">Cancel</button>
		</div>
	</form>
</template>

<script>
import InputForm from '../components/InputForm.vue';
import { loginUser as firebaseLogin } from '../firebase/firebase';
import { mapActions } from 'vuex';

const components = {
	InputForm,
};

const data = () => ({
	email: '',
	password: '',
});

const methods = {
	...mapActions('LoginForm', ['inputEmailAction']),
	loginUser() {
		firebaseLogin(this.email, this.password, this.inputEmailAction);
	},
	changePass(e) {
		console.log(e);
		this.password = e;
	},
	changeEmail(e) {
		console.log(e);
		this.email = e;
	},
};

export default {
	name: 'FormLogin',
	data: data,
	components: components,
	methods: methods,
};
</script>
