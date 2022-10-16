import {NavLink} from "react-router-dom";
import css from './Pagination.module.css'

const Pagination = ({paginate}) => {
    const pageNumbers = [];

    for (let i = 1; i <= Math.ceil(  500); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className={css.pagination}>
                {pageNumbers.map(number => (
                    <NavLink to={`page/${number}`} key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </NavLink>
                ))}
            </div>
    );
};

export {Pagination}