import axios from 'axios'

export default class Movies {
    constructor() {
        axios.defaults.baseURL = 'http://localhost:3000/api/'
    }


    getAll(term = '') {
        return axios.get('movies', {
            props: {
                term
            }
        })
  
    }

    addMovies(newMovies) {
        return axios.post('movies', newMovies)
    }

    get(id) {
        return axios.get(`movies/${id}`)
    }
}

export const movies = new Movies()