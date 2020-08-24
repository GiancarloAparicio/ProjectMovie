<template>
  <div class="mt-5 mx-auto row container">
    <div class="col-md-6 mx-auto">
      <FormLogin />
    </div>
    <FormRegister />
  </div>
</template>

<script>
import FormLogin from "../partials/FormLogin";
import FormRegister from "../partials/FormRegister";

export default {
  name: "Login",
  components: { FormLogin, FormRegister },
};
</script>

<style></style>
