import {useDispatch, useSelector} from "react-redux";
import useLocalStorage from "use-local-storage";
import {useParams} from "react-router-dom";
import {useEffect} from "react";

import {MoviesListCard} from "../../components";
import {genreActions} from "../../redux/slices";
import {Pagination} from "../Pagination/Pagination";
import {Loader} from "../Loader/Loader";
import css from './MovieListByGenre.module.css'



const MovieListByGenre = () => {

    const [currentPage, setCurrentPage] = useLocalStorage('page',1);

    const{id} = useParams()

    const dispatch = useDispatch()

    const {getById, errors, loading} = useSelector(state => state.genreReducer)

    useEffect(()=>{
        dispatch(genreActions.getById({id, currentPage}))
    },[dispatch, id, currentPage])

    const paginate = (pageNumber) => {
        setCurrentPage(pageNumber)
    }

    let genreTotalPage = getById.total_pages

    return (
        <div className={css.container}>
            {errors && <h3>{JSON.stringify(errors)}</h3>}
            {loading? <div className={css.loaderContainer}><Loader/></div>
                :
                getById.results &&  getById.results.map(movie =>  <MoviesListCard key={movie.id} movie={movie} />) }
            <div className={css.paginationContainer}>
                <Pagination paginate={paginate} genreTotalPage={genreTotalPage}/>
            </div>
        </div>
    );
};

export {MovieListByGenre};