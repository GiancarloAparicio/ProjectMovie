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
import LoginForm from "../partials/LoginForm";
import RegisterForm from "../partials/RegisterForm";

const components = () => {
  LoginForm, RegisterForm;
};

export default {
  name: "Login",
  components,
};
</script>

