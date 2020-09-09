<template>
  <div class="container">
    <div class="row py-5">
      <div class="col-md-5">
        <img class="img-fluid mx-auto d-block" src="../assets/404.jpg" alt="404" />
      </div>
      <div class="col-md-7 pt-5">
        <div class="text-center container pt-5">
          <h2 class="text-dark py-5">Opps algo salio mal :(</h2>
          <h3>Intenta denuevo</h3>
        </div>
        <div class="container text-center py-4">
          <button @click="goTo" class="btn btn-success mx-auto">
            <h4 class="text-white">Start again</h4>
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const methods = {
  goTo() {
    this.$router.push({ name: "home" });
  },
};
export default {
  name: "Ruta404",
  methods,
};
</script>

<style></style>
