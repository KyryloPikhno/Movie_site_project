import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "use-local-storage";
import {useEffect} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import {Pagination} from "../Pagination/Pagination";
import {Loader} from "../Loader/Loader";
import css from './MoviesList.module.css'


const MoviesList = () => {

    const [currentPage, setCurrentPage] = useLocalStorage('page',1);

    const{movies, loading, errors, searchResult} = useSelector(state => state.movieReducer)

    let searchTotalPages = searchResult.total_pages
    let movieTotalPages = movies.total_pages

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage}))
    },[dispatch, currentPage])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    return (
            <div>
                <div className={css.container}>
                    {errors && <h3>{JSON.stringify(errors)}</h3>}
                    {searchResult.results && searchResult.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                    {movies.results && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
                    {loading? <div className={css.loaderContainer}><Loader/></div>
                    :
                    <Pagination paginate={paginate} searchTotalPages={searchTotalPages} movieTotalPages={movieTotalPages}/>}
            </div>
    );
};

export {MoviesList};