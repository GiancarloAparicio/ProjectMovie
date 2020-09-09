<template>
  <div class="row">
    <div :key="index" v-for="(movie,index) in movies" class="col-md-4 card py-4 px-3">
      <h3 class="text-center">{{movie.Title}}</h3>
      <img
        class="img-thumbnail d-block mx-auto"
        style="width: 250px; height: 250px;"
        v-bind:src="movie.Poster"
        v-bind:alt="movie.Title"
      />
      <h5 class="text-center mt-3">{{movie.Year}}</h5>
    </div>
    <div class="col-md-12">
      <Pagination
        v-bind:pagination="totalMovies"
        @changePage="changePage"
        v-bind:currentPage="currentPage"
      />
    </div>
  </div>
</template>

<script>
import Pagination from "../components/Pagination";

const props = ["movies", "totalMovies", "currentPage"];

const components = {
  Pagination,
};

const methods = {
  changePage(pos) {
    this.$emit("changePage", pos);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  },
};

export default {
  name: "MoviesLists",
  methods,
  props,
  components,
};
</script>
