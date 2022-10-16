import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'
import {useDispatch, useSelector} from "react-redux";
import {movieActions} from "../../redux/slices";


const Header = () => {

    const dispatch = useDispatch()

    const {theme} = useSelector(state => state.movieReducer)

    console.log(theme);

    return (
        <div className={theme? css.header : css.headerOrange}>
            <MoviesSearchForm/>
            <div>
                <button onClick={()=>dispatch(movieActions.changeTheme(false))}>change theme</button>
            </div>
        </div>
    );
};

export {Header};