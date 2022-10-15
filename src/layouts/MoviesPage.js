import {Header} from "../components";
import {MoviesListPage} from "../pages";
import css from './MoviesPage.module.css'

const MoviesPage = () => {


    return (
        <div className={css.container}>
            <div>
                 <Header/>
            </div>
            <div>
                  <MoviesListPage/>
            </div>
        </div>
    );
};

export {MoviesPage};