import {useDispatch, useSelector} from "react-redux";
import {useEffect, useState} from "react";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'
import {Pagination} from "../Pagination/Pagination";


const MoviesList = () => {

    const [currentPage, setCurrentPage] = useState();

    const {movies, loading, errors} = useSelector(state => state.movieReducer)

    const dispatch = useDispatch()

    useEffect(()=>{
        dispatch(movieActions.getAll({currentPage}))
    },[dispatch, currentPage])

    const paginate = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }

    console.log(movies)

    return (
        <div>
            <div className={css.container}>
                {errors && <h3>{JSON.stringify(errors)}</h3>}
                {movies.results && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
            </div>
                {loading? <h3>Loading...</h3>
                    :
                    <Pagination paginate={paginate}/>}
        </div>
    );
};

export {MoviesList};