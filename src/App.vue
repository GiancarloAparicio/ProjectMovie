<template>
  <div>
    <!-- Navegacion -->
    <NavBar v-bind:existsUser="existsUser">
      <router-link v-if="existsUser" class="nav-link" to="/">Home</router-link>
      <router-link v-if="existsUser" class="nav-link" to="/movie">Movies</router-link>
      <router-link v-if="!existsUser" class="nav-link" to="/login">Login</router-link>
    </NavBar>

    <!-- Router -->
    <div class="container mt-4">
      <div class="row">
        <router-view />
      </div>
    </div>

    <!-- Footer-->
    <Footer />
  </div>
</template>

<script>
//Components
import NavBar from "./partials/NavBar.vue";
import Footer from "./partials/Footer.vue";
import { apiUrl } from "./config/index";

//Firebase
import { startFirebase, listener } from "./firebase/firebase";

//Vuex
import { mapActions, mapState } from "vuex";
import { CHANGE_USER } from "./store/types";

const data = () => ({
  url: apiUrl,
});
const components = {
  NavBar,
  Footer,
};

const methods = {
  ...mapActions("User", [CHANGE_USER]),
};

const computed = {
  ...mapState("User", ["existsUser"]),
};

export default {
  name: "App",
  components: components,
  data: data,
  methods: methods,
  computed,
  created() {
    startFirebase();
    listener(this.CHANGE_USER);
  },
};
</script>
