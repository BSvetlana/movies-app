<template>
    <div>
        <movies-row :movies="movies"></movies-row>
    </div>
</template>

<script>
import { movies } from '../services/movies.js'
import MoviesRow from '../components/MoviesRow'

    export default {
        name: 'AppMovies',
        components: {
            MoviesRow
        },
        data() {
            return {
                movies: []
            }
        },
          created() {
              movies.getAll()
              .then((response) => {
                  this.movies = response.data
              }).catch((error) => {
                  console.log(error)
              })
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
    }
</script>

<style>

</style>