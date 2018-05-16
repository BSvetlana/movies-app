<template>
<div>

    <div class="container mt-4">
        <b-container class="bv-example-row">
            <b-row class="justify-content-md-center">
                <b-col cols="6">
                    <b-card-group deck class="mb-3"
                                  v-for="movie in movies"
                                  :key="movie.id">
                        <b-card border-variant="danger"
                                header="Movies Details"
                                header-bg-variant="danger"
                                header-text-variant="white"
                                align="center">
                            <p class="card-text">Title: {{ movie.title }}</p>
                            <p class="card-text">Director: {{ movie.director }}</p>
                            <p class="card-text">Image URL: {{ movie.imageUrl }}</p>
                            <p class="card-text">Duration: {{ movie.duration }}</p>
                            <p class="card-text">Relase Date: {{ movie.releaseDate }}</p>
                            <p class="card-text">Genre: {{ movie.genre }}</p>
                        </b-card>
                    </b-card-group>
                </b-col>
            </b-row>
        </b-container>
    </div>

</div>
</template>

<script>


export default {
    name: 'MoviesRow',
    props: {
        movies: Array
        }
    
}
</script>

<style>

</style>


