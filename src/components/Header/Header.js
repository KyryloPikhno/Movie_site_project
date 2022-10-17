import {useDispatch, useSelector} from "react-redux";

import {movieActions} from "../../redux/slices";
import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'


const Header = () => {

    const dispatch = useDispatch()

    const {theme} = useSelector(state => state.movieReducer)

    console.log(theme);

    return (
        <div className={theme? css.headerOrange : css.header}>
                <button onClick={()=>dispatch(movieActions.changeTheme(true))}>change theme</button>
            <div>
            <MoviesSearchForm/>
            </div>
        </div>
    );
};

export {Header};