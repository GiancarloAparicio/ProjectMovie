<template>
  <form @submit.prevent="searchMovie" class="form-inline my-2 d-table mx-auto">
    <input
      v-model="movie"
      class="form-control mr-sm-2"
      v-bind:class="{ 'is-invalid': isEmpty }"
      type="text"
      placeholder="Search Movie"
    />
    <button class="btn btn-secondary my-2" type="submit">Search</button>
  </form>
</template>

<script>
const data = () => ({
  movie: "",
  isEmpty: false,
});

const methods = {
  searchMovie() {
    if (!this.movie) {
      this.isEmpty = true;
    } else {
      this.isEmpty = false;
      this.$emit("searchMovie", this.movie);
    }
  },
};
export default {
  name: "SearchForm",
  data,
  methods,
};
</script>