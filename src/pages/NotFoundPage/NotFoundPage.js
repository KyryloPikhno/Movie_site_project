import {MoviesSearchForm} from "../../components/MoviesSearchForm/MoviesSearchForm";
import css from './NotFoundPage.module.css'


const NotFoundPage = () => {


    return (
        <div className={css.container}>
            <h1 className={css.header}>404</h1>
            <p className={css.text}>I'm sorry but the page was not found.</p>
            <MoviesSearchForm/>
        </div>
    );
};

export {NotFoundPage};