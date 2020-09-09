<template>
  <div class="col-md-10 mx-auto">
    <SearchForm @searchMovie="consultApi" />
    <MoviesLists
      v-bind:movies="movies.Search"
      v-bind:totalMovies="movies.totalResults"
      v-bind:currentPage="currentPage"
      @changePage="changePage"
    />
    <div
      v-if="!movie"
      class="alert alert-info p-4 w-75 mx-auto"
      role="alert"
    >Find your favorite movie ... :)</div>
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
  currentPage: 1,
  movie: "",
});

const methods = {
  consultApi(movie) {
    // &t=title para tener todos los datos
    fetch(`${apiUrl}&s=${movie}&page=${this.currentPage}&plot=full`)
      .then((res) => res.json())
      .then((data) => {
        this.movie = movie;
        this.errors = data.Response ? null : data;
        this.movies = data.Response ? data : null;
      })
      .catch((error) => {
        console.log(error);
      });
  },
  changePage(page) {
    this.currentPage = page;
    this.consultApi(this.movie);
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


