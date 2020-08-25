<template>
  <FormModal title="Register User:" @modalSubmit="submitForm" @modalCancel="cancelSubmit">
    <InputForm
      type="email"
      v-bind:status="register.inputEmail"
      v-bind:messageStatus="register.errorEmail"
      @value="changeEmail"
      label="Email"
      placeholder="Enter email"
    />
    <InputForm
      type="password"
      @value="changePassword"
      v-bind:status="register.inputPassword"
      v-bind:messageStatus="register.errorPassword"
      label="Password"
      placeholder="Password"
    />
  </FormModal>
</template>

<script>
//Components
import FormModal from "../components/FormModal";
import InputForm from "../components/InputForm";

//Firebase
import { registerUser as registerFirebase } from "../firebase/firebase";

//Vuex
import { mapActions, mapState } from "vuex";
import { CHANGE_REGISTER } from "../store/types";
import { statusFormAction } from "../store/actions";

const data = () => ({
  email: "",
  password: "",
});

const methods = {
  ...mapActions("StatusForm", [CHANGE_REGISTER]),

  submitForm() {
    registerFirebase(this.email, this.password, this.CHANGE_REGISTER);
  },
  cancelSubmit() {
    this.CHANGE_REGISTER(statusFormAction("reset-status"));
  },
  changePassword(value) {
    this.password = value;
  },
  changeEmail(value) {
    this.email = value;
  },
};

const computed = {
  ...mapState("StatusForm", ["register"]),
};

const components = {
  FormModal,
  InputForm,
};

export default {
  data: data,
  name: "RegisterForm",
  components: components,
  methods: methods,
  computed: computed,
};
</script>

<style>
</style>