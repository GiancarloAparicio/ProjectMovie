<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
    <a class="navbar-brand" href="#">Movies</a>
    <button
      class="navbar-toggler"
      data-toggle="collapse"
      data-target="#navbar"
      aria-controls="navbar"
      id="closeRegister"
    >
      <span class="navbar-toggler-icon"></span>
    </button>

    <div class="collapse navbar-collapse" id="navbar">
      <ul class="navbar-nav mr-auto">
        <slot class="nav-item" />
      </ul>

      <button
        v-if="!existsUser"
        class="btn btn-secondary"
        data-toggle="modal"
        data-target="#ModalFormRegister"
      >Register</button>
    </div>
  </nav>
</template>

<script>
const props = {
  existsUser: {
    type: Boolean,
    default: false,
  },
};

export default {
  name: "NavBar",
  props,
};
</script>

<style></style>
