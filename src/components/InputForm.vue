<template>
	<div v-bind:class="classInput()">
		<label class="d-block">
			{{ label }}
			<input
				v-model="value"
				@keyup="emitEvent"
				v-bind:type="type"
				class="form-control"
				v-bind:placeholder="placeholder"
		/></label>

		<div v-if="status !== null" class="invalid-feedback">
			{{ messageStatus }}
		</div>
	</div>
</template>

<script>
const data = () => ({
	value: '',
});

const props = {
	status: {
		default: '',
	},
	messageStatus: {
		default: null,
	},
	type: {
		default: 'text',
	},
	label: {
		deafult: 'Input',
	},
	placeholder: {
		default: '',
	},
};

const methods = {
	classInput() {
		return 'form-group ' + this.status;
	},
	emitEvent() {
		this.$emit('value', this.value);
	},
};

export default {
	data: data,
	name: 'InputForm',
	props: props,
	methods: methods,
};
</script>

<style></style>
