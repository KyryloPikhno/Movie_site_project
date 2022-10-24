import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {NavLink} from "react-router-dom";

import {genreActions, userActions} from "../../redux/slices";
import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";
import {GenreBox} from "../GenreBox/GenreBox";
import {UserInfo} from "../UserInfo/UserInfo";
import css from './Header.module.css'


const Header = () => {

    const {currentTheme} = useSelector(state=> state.movieReducer)

    const dispatch = useDispatch()

    const {genres} = useSelector(state => state.genreReducer)

    const {user} = useSelector(state => state.userReducer)

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    useEffect(()=>{
        dispatch(userActions.getUser())
    },[dispatch])

    return (
            <div className={currentTheme === 'dark'? css.header : css.lightHeader}>
                <NavLink to={'/'}>
                         <img className={css.img}  src="https://www.transparentpng.com/thumb/movie/gray-movie-written-icon-png-UpaYYD.png" alt="logo"/>
                </NavLink>
                <div>
                    <MoviesSearchForm/>
                </div>
                <div className={css.containerForGenreBox}>
                    {genres &&  <h3>GENRES</h3>}
                    {genres && genres.map(genre => <GenreBox key={genre.id} genre={genre}/>)}
                </div>
                    <ThemeSwitcher/>
                    <UserInfo user={user}/>
            </div>
    );
};

export {Header};