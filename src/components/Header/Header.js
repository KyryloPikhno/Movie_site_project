import {useDispatch, useSelector} from "react-redux";
import {NavLink} from "react-router-dom";
import {useEffect} from "react";
import {GenreBox} from "../GenreBox/GenreBox";

import {genreActions} from "../../redux/slices";
import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'
import {ThemeSwitcher} from "../ThemeSwitcher/ThemeSwitcher";


const Header = () => {

    const {currentTheme} = useSelector(state=> state.movieReducer)

    const dispatch = useDispatch()

    // const navigate = useNavigate()

    const {genres} = useSelector(state => state.genreReducer)

    useEffect(()=>{
        dispatch(genreActions.getAll())
    },[dispatch])

    return (
        <div>
            <div className={currentTheme === 'dark'? css.header : css.lightHeader}>
                   <NavLink to={`/`}>
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
            </div>
        </div>
    );
};

export {Header};