import {axiosService} from "./axios.service";
import {urls} from "../configs";


const genreService ={
    getAll:()=>axiosService.get(urls.genres),
    getById:(id)=>axiosService.get(`${urls.movies}${urls.genresById}${id}`)
}

export {genreService}
// https://api.themoviedb.org/3/discover/movie?&with_genres=28