<template>
    <div>
        <div class="container mt-4">
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                    <b-col cols="6">

                        <movie-search @search-term-change="onSearchTermChanged"></movie-search>
                               <b-card class="text-center" 
                                        v-if="!movies.length"
                                        border-variant="danger">
                                    No Movies
                                </b-card>
                        <movies-row :movie="movie"
                                    v-for="movie in movies"
                                    :key="movie.id"></movies-row>
                    
                    </b-col>
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import { movies } from '../services/movies.js'
import MoviesRow from '../components/MoviesRow'
import MovieSearch from '../components/MovieSearch'

    export default {
        name: 'AppMovies',
        components: {
            MoviesRow,
            MovieSearch
        },
        data() {
            return {
                movies: []
            }
        },
        methods: {
        onSearchTermChanged(term) {
            movies.getAll(term)
            .then(({ data }) => {
                this.movies = data
        })
        },
        created() {
              movies.getAll()
              .then(({data}) => {
                  this.movies = data
              }).catch((error) => {
                  console.log(error)
              })
          },

    }
    }

        //   beforeRuterEnter(to, from, next) {
        //       movies.getAll()
        //       .then((response) =>{
        //           next((vm) => {
        //               vm.movies = response.data
        //           })
        //       }).catch((error) => {
        //           console.log(error)
        //       })
        //   }
    
</script>

<style>

</style>