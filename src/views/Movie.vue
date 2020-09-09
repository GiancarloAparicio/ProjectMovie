<template>
  <div class="col-md-10 mx-auto">
    <SearchForm @searchMovie="consultApi" />
    <MoviesLists
      v-bind:movies="movies.Search"
      v-bind:totalMovies="movies.totalResults"
      v-bind:index="index"
    />
  </div>
</template>

<script>
//Components
import SearchForm from "../partials/SearchForm";
import MoviesLists from "../partials/MoviesLists";
//Api
import { apiUrl } from "../config/index";

const data = () => ({
  movies: {},
  errors: {},
  index: 1,
});

const methods = {
  consultApi(movie) {
    // &t=title para tener todos los datos
    fetch(`${apiUrl}&s=${movie}&page=${this.index}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        this.errors = data.Response ? null : data;
        this.movies = data.Response ? data : null;
      })
      .catch((error) => {
        console.log(error);
      });
  },
};

const components = {
  SearchForm,
  MoviesLists,
};
export default {
  name: "Movie",
  data,
  components,
  methods,
};
</script>


