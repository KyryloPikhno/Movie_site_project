import {axiosService} from "./axios.service";

import {urls} from "../configs";


const movieService = {
    getAll: (page)=>axiosService.get(`${urls.movies}?page=${page}`),
    searchByTitle: (title, page)=>axiosService.get(`${urls.requests}?query=${title}&page=${page}`)
 }

 export {movieService}

// https://api.themoviedb.org/3/search/movie?query=