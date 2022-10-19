import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom";
import {useEffect} from "react";
import {GenreBox} from "../GenreBox/GenreBox";

import {genreActions} from "../../redux/slices";
import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";


const Header = () => {

    const navigate = useNavigate()

    const dispatch = useDispatch()

    const {genres} = useSelector(state => state.genreReducer)

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    return (
        <div>
            <div className={css.header}>
                   <img className={css.img} onClick={()=>navigate('/')} src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo"/>
                <div>
                    <MoviesSearchForm/>
                </div>
                <div className={css.containerForGenreBox}>
                    <h3>GENRES</h3>
                    {genres && genres.map(genre => <GenreBox key={genre.id} genre={genre}/>)}
                </div>
                    <ThemeSwitcher/>
            </div>
        </div>
    );
};

export {Header};