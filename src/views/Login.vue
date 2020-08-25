<template>
  <div class="mt-5 mx-auto row container">
    <div class="col-md-6 mx-auto">
      <LoginForm />
    </div>
    <RegisterForm />
  </div>
</template>

<script>
import LoginForm from "../partials/LoginForm";
import RegisterForm from "../partials/RegisterForm";

export default {
  name: "Login",
  components: { LoginForm, RegisterForm },
};
</script>

<style></style>
