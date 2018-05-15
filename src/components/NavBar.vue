<template>
  <div>
    <b-navbar toggleable="md" type="dark" variant="danger">

      <b-navbar-toggle target="nav_collapse"> Ceca</b-navbar-toggle>

      <router-link :to="{name: 'home'}"><b-navbar-brand>Movies</b-navbar-brand></router-link>

      <b-collapse is-nav id="nav_collapse">

        <b-navbar-nav>
          <b-nav-item href="#"></b-nav-item>
          <b-nav-item href="#"></b-nav-item>
        </b-navbar-nav>

        <!-- Right aligned nav items -->
        <b-navbar-nav class="ml-auto">
          <b-nav-form>
            <b-form-input size="sm" class="mr-sm-2" type="text" placeholder="Search"/>
            <b-button size="sm" class="my-2 my-sm-0" type="submit">Search</b-button>
          </b-nav-form>
        </b-navbar-nav>

      </b-collapse>
    </b-navbar>
  </div>
</template>

<script>

export default {
  name: 'NavBar'
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
