import {Link} from "react-router-dom";

import {urls} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './MoviesListCard.module.css'


const MoviesListCard = ({movie}) => {

    const{id, title, vote_average, poster_path} = movie



    return (
        <Link to={`info/${id}`} state={{...movie}}  className={css.card}>
            <div>
                {poster_path && <img className={css.img} src={`${urls.image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.stars}>
                <StarsRating  vote_average={vote_average}/>
            </div>
        </Link>
    );
};

export {MoviesListCard};