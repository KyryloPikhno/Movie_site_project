import {axiosService} from "./axios.service";
import {urls} from "../configs";


const genreService ={
    getAll:()=>axiosService.get(urls.genres),
    getById:(id, currentPage)=>axiosService.get(`${urls.movies}${urls.genresById}${id}&page=2${currentPage}`)
}

export {genreService}
// https://api.themoviedb.org/3/discover/movie?&with_genres=28