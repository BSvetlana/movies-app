<template>
    <div>
        <b-card-group deck class="mb-3">
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
    </div>
</template>

<script>

export default {
    name: 'MoviesRow',
    props: {
        movie: Object,
        required: true
        }
    
}
</script>

<style>

</style>


