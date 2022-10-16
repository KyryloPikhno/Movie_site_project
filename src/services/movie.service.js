import {axiosService} from "./axios.service";

import {urls} from "../configs";


const movieService = {
    getAll: ()=>axiosService.get(urls.movies),
    searchByTitle: (title)=>axiosService.get(`${urls.requests}${title}`)
 }

 export {movieService}