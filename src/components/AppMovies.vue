<template>
    <div>
        <div class="container mt-4">
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                    <b-col cols="11">
                        <div class="mb-3">
                          <b-dropdown text="Sort by" variant="danger">
                            <b-dropdown-item @click="sortBy('title','asc')">Name ASC</b-dropdown-item>
                            <b-dropdown-item @click="sortBy('title','desc')">Name DESC</b-dropdown-item>
                            <b-dropdown-item @click="sortBy('duration','asc')">Duration ASC</b-dropdown-item>
                            <b-dropdown-item @click="sortBy('duration','desc')">Duration DESC</b-dropdown-item>
                        </b-dropdown>
                        <b-button type="submit"
                                  variant="danger"  
                                  @click="selectedAll"
                                  style="float: right"
                                  >
                        Select All
                        </b-button>
                        <b-button type="submit"
                                  variant="success"  
                                  @click="deselectedAll"
                                  style="float: right"
                                  >
                        Deselect All
                        </b-button>
                        </div>
                        <movie-search @search-term-change="onSearchTermChanged"></movie-search>
                               <b-card class="text-center" 
                                        v-if="!movies.length"
                                        border-variant="danger">
                                    No Movies
                                </b-card>
                               
                        <movies-row :movie="movie"
                                    v-for="movie in movies"
                                    :key="movie.id"
                                    :selected-movies-id="selectedMoviesId"
                                    @on-selected-movie="onSelectedMovie">

                        </movies-row>
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
            MovieSearch,
            
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
            },
        selectedAll(){
            this.selectedMoviesId = this.movies.map((movie) => movie.id)
            },
        deselectedAll() {
            this.selectedMoviesId = []
        },
        sortBy(prop, order){
            let orderCoefficient = order === 'asc' ? 1 : -1
            this.movies = this.movies.sort((movie1,movie2) => {
                return movie1[prop] >= movie2[prop] ? orderCoefficient : -orderCoefficient
            })
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