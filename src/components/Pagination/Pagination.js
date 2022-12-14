import {NavLink, useParams} from "react-router-dom";

import css from './Pagination.module.css'



const Pagination = ({paginate, searchTotalPages, movieTotalPages, genreTotalPage}) => {

    const pageNumbers = [];

    const {id} = useParams()

    // this API gives only 500 pages
    movieTotalPages = 500

    for (let i = 1; i <= Math.ceil(searchTotalPages  || genreTotalPage || movieTotalPages); i++) {
        pageNumbers.push(i);
    }

    return (
            <div className={css.pagination}>
                {pageNumbers.map(number => (
                    <NavLink to={genreTotalPage &&`/genre/${id}/page/${number}`|| movieTotalPages && `/all_movies/page/${number}`}  key={number}>
                        <div onClick={() => paginate(number)}>
                            {number}
                        </div>
                    </NavLink>
                ))}
            </div>
    );
};

export {Pagination}