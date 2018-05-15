import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import AppMovies from './components/AppMovies.vue'

const routes = [
    {path: '/', redirect: '/movies', name: 'home'},
    {path: '/movies', component: AppMovies, name: 'movies'}
]

export const router = new VueRouter({
    mode: 'history',
    routes
})