<template>
	<nav class="navbar navbar-expand-lg navbar-dark bg-primary">
		<a class="navbar-brand" href="#">Movies</a>
		<button
			class="navbar-toggler"
			data-toggle="collapse"
			data-target="#navbar"
			aria-controls="navbar"
		>
			<span class="navbar-toggler-icon"></span>
		</button>

		<div class="collapse navbar-collapse" id="navbar">
			<ul class="navbar-nav mr-auto">
				<slot class="nav-item" />
			</ul>
			<form class="form-inline my-2 my-lg-0">
				<input
					class="form-control mr-sm-2"
					type="text"
					placeholder="Search"
				/>
				<button class="btn btn-secondary " type="submit">
					Search
				</button>
			</form>
		</div>
	</nav>
</template>

<script>
export default {
	name: 'NavBar',
};
</script>

<style></style>
