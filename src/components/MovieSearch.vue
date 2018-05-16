<template>
    <div class="mb-3">
        <b-container>
          <b-row >
            <b-col sm="12">
             <b-input 
            :state="true" 
            type="text" 
            placeholder="Search Movies ...."
            @input="emitInputChangeEvent"
            /> 

            </b-col>
         </b-row>
        </b-container>
    </div>
</template>

<script>

export default {
    name: 'MovieSearch',

    methods: {
    emitInputChangeEvent(term) {
      this.$emit('search-term-change', term)
        }
    }
    
}
</script>

<style>

</style>


