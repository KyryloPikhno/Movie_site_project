import css from './GenreBox.module.css'
import {NavLink} from "react-router-dom";
import {useEffect} from "@types/react";
import {movieActions} from "../../redux/slices";



const GenreBox = ({genre}) => {


    return (
        <NavLink className={css.box} to={`genre/${genre.id}`} state={{...genre}}>
            {genre.name}
        </NavLink>
    );
};

export {GenreBox};