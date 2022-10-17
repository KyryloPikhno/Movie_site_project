import {Outlet} from "react-router-dom";

import {Header} from "../components";
import css from './MoviesPage.module.css'


const MeinMoviesPage = () => {


    return (
        <div className={css.container}>
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