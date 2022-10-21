import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";

import {MoviesListCard} from "../MoviesListCard/MoviesListCard";
import {movieActions} from "../../redux/slices";
import {Pagination} from "../Pagination/Pagination";
import css from './MoviesList.module.css'




const MoviesList = () => {


    const [currentPage, setCurrentPage] = useState();

    const {movies, loading, errors, searchResult} = useSelector(state => state.movieReducer)

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
                    {movies.results && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                    {searchResult.results && searchResult.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
                </div>
                    {loading? <h1>Loading...</h1>
                    :
                    <Pagination paginate={paginate} searchTotalPages={searchTotalPages} movieTotalPages={movieTotalPages}/>}
            </div>
    );
};

export {MoviesList};