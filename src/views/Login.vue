<template>
  <div class="mt-5 mx-auto row container">
    <div class="col-md-6 mx-auto">
      <LoginForm v-if="!user" />
    </div>
    <RegisterForm />
  </div>
</template>

<script>
//Components
import LoginForm from "../partials/LoginForm";
import RegisterForm from "../partials/RegisterForm";

//Vuex
import { mapState } from "vuex";

const components = {
  LoginForm,
  RegisterForm,
};

const computed = {
  ...mapState("User", ["existsUser"]),
  user() {
    if (this.existsUser) {
      this.$router.replace({ name: "home" });
    }
    return this.existsUser;
  },
};

export default {
  name: "Login",
  components,
  computed,
};
</script>
