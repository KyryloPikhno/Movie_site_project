import {MoviesSearchForm} from "../MoviesSearchForm/MoviesSearchForm";
import css from './Header.module.css'


const Header = () => {


    return (
        <div className={css.header}>
            Header
            <MoviesSearchForm/>
        </div>
    );
};

export {Header};