import {axiosService} from "./axios.service";

import {urls} from "../configs";


const movieService = {
    getAll: (page)=>axiosService.get(`${urls.movies}?page=${page}`),
    searchByTitle: (title)=>axiosService.get(`${urls.requests}${title}`)
 }

 export {movieService}