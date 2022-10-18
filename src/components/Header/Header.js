import {useDispatch, useSelector} from "react-redux";

import {genreActions, movieActions} from "../../redux/slices";
import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {GenreBox} from "../GenreBox/GenreBox";


const Header = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {theme} = useSelector(state => state.movieReducer)

    const {genres} = useSelector(state => state.genreReducer)

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])


    console.log(genres);


    return (

        <div>
            <div className={theme? css.headerOrange : css.header}>
                   <img onClick={()=>navigate('/')} className={css.img} src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo"/>
                    <button onClick={()=>dispatch(movieActions.changeTheme(true))}>change theme</button>
                <div>
                    <MoviesSearchForm/>
                </div>
                <div className={css.containerForGenreBox}>
                    {genres && genres.map(genre =><GenreBox key={genre.id} genre={genre}/> )}
                </div>
            </div>
        </div>

    );
};

export {Header};