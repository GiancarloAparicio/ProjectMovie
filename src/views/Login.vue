<template>
	<div class="mt-5 mx-auto row container">
		<div class="col-md-6 mx-auto">
			<FormLogin />
		</div>
	</div>
</template>

<script>
import FormLogin from '../partials/FormLogin';

export default {
	name: 'Login',
	components: { FormLogin },
};
</script>

<style></style>
