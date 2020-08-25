<template>
  <div>
    <NavBar>
      <router-link class="nav-link" to="/">Home</router-link>
      <router-link class="nav-link" to="/movie">Movies</router-link>
      <router-link class="nav-link" to="/login">Login</router-link>
    </NavBar>

    <router-view />
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
import { mapActions } from "vuex";
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

export default {
  name: "App",
  components: components,
  data: data,
  methods: methods,
  created() {
    startFirebase();
    listener(this.CHANGE_USER);
  },
};
</script>
