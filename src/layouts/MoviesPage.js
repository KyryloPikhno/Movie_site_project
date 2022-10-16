import {Header} from "../components";
import {MoviesListPage} from "../pages";
import css from './MoviesPage.module.css'
import {Outlet} from "react-router-dom";




const MoviesPage = () => {


    return (
        <div className={css.container}>
            <div>
                 <Header/>
            </div>
            <div>
                {/*<MoviesListPage/>*/}
                <Outlet/>
            </div>
        </div>
    );
};

export {MoviesPage};