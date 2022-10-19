import css from './GenreBox.module.css'
import {NavLink} from "react-router-dom";




const GenreBox = ({genre}) => {


    return (
        <NavLink className={css.box} to={`genre/${genre.id}`} state={{...genre}}>
            {genre.name}
        </NavLink>
    );
};

export {GenreBox};