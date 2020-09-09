<template >
  <div class="mx-auto">
    <div class="alert alert-warning p-5" v-if="!currentUser.emailVerified" role="alert">
      Sorry your gmail account
      <strong>{{currentUser.email}}</strong> is not verified
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

const computed = {
  ...mapState("User", ["currentUser"]),
};

export default {
  name: "Home",
  computed,
};
</script>


