<template>
    <div>
        <b-card-group deck class="mb-4">
            <b-card border-variant="danger"
                    :class="{'selectedColor': selected}"
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
                        <b-button type="submit"
                                  variant="danger"  
                                  @click="onSelected"
                                  style="float: right"
                                  v-b-modal.modal1>
                        Select 
                        </b-button>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>

export default {
    name: 'MoviesRow',
    props: {
        movie: {
        type: Object,
        required: true
        },
        selectedMoviesId: {
            type: Array,
            required: true,
            default: () => []
        }
    },
    computed: {
        selected() {
            return this.selectedMoviesId.indexOf(this.movie.id) > -1;
        }
    },
    methods: {
        onSelected(){
            this.selected = true
            this.$emit('on-selected-movie', this.movie, !this.selected)
        }

    }

    
}
</script>

<style>
.selectedColor {
    background-color: mistyrose;
}
</style>


