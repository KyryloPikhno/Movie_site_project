import {useLocation} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices";
import {MoviesListCard} from "../../components";
import css from './GenrePage.module.css'



const GenrePage = () => {

    const {state} = useLocation()

    const {id} = state

    const dispatch = useDispatch()

    const {getById} = useSelector(state => state.genreReducer)

    useEffect(()=>{
        dispatch(genreActions.getById({id}))
    },[dispatch, id])

    return (
        <div className={css.container}>
            {getById.results &&  getById.results.map(movie =>  <MoviesListCard key={movie.id} movie={movie} />) }
        </div>
    );
};

export {GenrePage};