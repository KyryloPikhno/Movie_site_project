import {NavLink} from "react-router-dom";

import css from './GenreBox.module.css'
import {useSelector} from "react-redux";


const GenreBox = ({genre}) => {

    const {currentTheme} = useSelector(state=> state.movieReducer)

    return (
        <NavLink className={currentTheme === 'dark'? css.box : css.lightBox } to={`genre/${genre.id}/page/1`}>
            {genre.name}
        </NavLink>
    );
};

export {GenreBox};