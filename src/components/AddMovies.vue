<template>
    <div>
        <div class="container mt-4">
            <b-container class="bv-example-row">
                <b-row class="justify-content-md-center">
                    <b-col cols="6">

                        <form @submit.prevent="onSubmit">
                            <div class="form-group">
                            <label for="title">Title</label>
                            <input type="text" class="form-control" id="title" placeholder="title ..." v-model="newMovies.title">
                            </div>

                            <div class="form-group">
                            <label for="director">Director</label>
                            <input type="text" class="form-control" id="director" placeholder="director ..." v-model="newMovies.director">
                            </div>

                            <div class="form-group">
                            <label for="imageUrl">ImageUrl</label>
                            <input type="text" class="form-control" id="imageUrl" placeholder="imageUrl ..." v-model="newMovies.imageUrl">
                            </div>

                            <div class="form-group">
                            <label for="duration">Duration</label>
                            <input type="text" class="form-control" id="duration" placeholder="duration ..." v-model="newMovies.duration">
                            </div>

                            <div class="form-group">
                            <label for="relaseDate">Relase Date</label>
                            <input type="text" class="form-control" id="relaseDate" placeholder="relaseDate ..." v-model="newMovies.releaseDate">
                            </div>

                            <div class="form-group">
                            <label for="genre">Genre</label>
                            <input type="text" class="form-control" id="genre" placeholder="duration ..." v-model="newMovies.genre">
                            </div>

                            <button type="submit" class="btn btn-danger">Submit</button>

                        </form>

                    </b-col> 
                </b-row>
            </b-container>
        </div>
    </div>
</template>

<script>
import  { movies } from '../services/movies'
import MoviesRow from '../components/MoviesRow'

export default {
    components: {
        MoviesRow
    },
    data() {
        return {
            movies: [],
            newMovies: {
                title: '',
                director: '',
                imageUrl: '',
                duration: '',
                releaseDate: '',
                genre: ''
            }
        }
    },
    created() {
      this.$route.params.id && movies.get(this.$route.params.id)
        .then((response) => {
          this.newMovies = response.data     
         })
    },
    methods: {
        onSubmit(){
         movies.addMovies(this.newMovies)
             .then(() => {
                 this.$router.push({name: 'movies'})
             })
             .catch((error) => {
                 console.log(error)
             })
        }
    }
}
</script>

<style>

</style>


