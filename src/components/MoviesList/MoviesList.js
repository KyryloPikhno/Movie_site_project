import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {movieActions} from "../../redux/slices";
import {MoviesListCard} from "../MoviesListCard/MoviesListCard";

import css from './MoviesList.module.css'


const MoviesList = () => {

    const {movies, loading, errors} = useSelector(state => state.movieReducer)

    const dispatch =useDispatch()

    useEffect(()=>{
        dispatch(movieActions.getAll())
    },[dispatch])

    console.log(movies.results);

    return (
        <div className={css.container}>
            {errors && <h3>{JSON.stringify(errors)}</h3>}
            {loading && <h3>Loading...</h3>}
            {movies.results && movies.results.map(movie => <MoviesListCard key={movie.id} movie={movie}/>)}
        </div>
    );
};

export {MoviesList};