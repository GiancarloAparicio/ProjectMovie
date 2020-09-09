<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-info">
    <h1 class="navbar-brand">Movies</h1>
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
      <button v-if="existsUser" @click="closeSession" class="btn btn-danger">Close</button>
    </div>
  </nav>
</template>

<script>
//Firebase
import { closeUser } from "../firebase/firebase";

//Vuex
import { mapActions } from "vuex";
import { CHANGE_USER } from "../store/types";

const props = {
  existsUser: {
    type: Boolean,
    default: false,
  },
};

const methods = {
  ...mapActions("User", [CHANGE_USER]),

  closeSession() {
    closeUser(this.CHANGE_USER);
  },
};

const watch = {
  existsUser() {
    if (!this.existsUser) {
      this.$router.replace({ name: "login" });
    }

    return this.existsUser;
  },
};

export default {
  name: "NavBar",
  props,
  methods,
  watch,
};
</script>
