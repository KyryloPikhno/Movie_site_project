import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {genreActions} from "../../redux/slices";
import {MoviesListCard} from "../../components";
import css from './MovieListByGenre.module.css'
import {Pagination} from "../Pagination/Pagination";
import useLocalStorage from "use-local-storage";
import {Loader} from "../Loader/Loader";



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