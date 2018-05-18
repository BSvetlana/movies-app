import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppMovies from './components/AppMovies.vue'
import AddMovies from './components/AddMovies.vue'

const routes = [
    {path: '/', redirect: '/movies', name: 'home'},
    {path: '/movies', component: AppMovies, name: 'movies'},
    {path: '/add', component: AddMovies, name: 'add'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})