import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MoviesPage.module.css'
import {useSelector} from "react-redux";


const MeinMoviesPage = () => {

    const {currentTheme} = useSelector(state=> state.movieReducer)



    return (
        <div className={currentTheme === 'dark'? css.container: css.lightContainer}>
            <div>
                 <Header/>
            </div>
            <div>
                <Outlet/>
            </div>
        </div>
    );
};

export {MeinMoviesPage};