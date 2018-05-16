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
                                    :key="movie.id"
                                    @on-selected-movie="onSelectedMovie"></movies-row>
                        <b-modal id="modal1" title="Selected Movies">
                        <p class="my-4">You selected {{ selectedMoviesCounter }} movies </p>
                        </b-modal>
                        <div>You selected: {{ selectedMoviesCounter }} movies</div>
                        
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
                movies: [],
                selectedMoviesId: [],
            }
        },
        created() {
              movies.getAll()
              .then(({data}) => {
                  this.movies = data
              }).catch((error) => {
                  console.log(error)
              })
          },
        methods: {
        onSearchTermChanged(term) {
            movies.getAll(term)
            .then(({ data }) => {
                this.movies = data
            })
        },
        onSelectedMovie(movie){
            if (this.selectedMoviesId.indexOf(movie.id) > -1) {
                return;
            }
            this.selectedMoviesId.push(movie.id)
            }
        },
        computed: {
            selectedMoviesCounter() {
                return this.selectedMoviesId.length
            }
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