import {useSelector} from "react-redux";
import {Link} from "react-router-dom";

import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../configs";
import css from './MoviesListCard.module.css'


const MoviesListCard = ({movie}) => {

    const {currentTheme} = useSelector(state=> state.movieReducer)

    const{id, title, vote_average, poster_path, genre_ids} = movie

    const {genres} = useSelector(state => state.genreReducer)

    const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)

    return (
        <Link to={`info/${id}`||`genre/info/${id}`} state={{...movie}} className={currentTheme === 'dark'? css.card:css.lightCard}>
            <div>
                {poster_path && <img className={css.img} src={`${urls.image_path}${poster_path}`} alt={title}/>}
            </div>
            <div className={css.title}>
                {title}
            </div>
            <div className={css.stars}>
                <StarsRating  vote_average={vote_average}/>
            </div>
            <div className={css.badgeContainer}>
                {badge && badge.map((genre, index)=> <GenreBadge key={index} genre={genre}/>)}
            </div>
        </Link>
    );
};

export {MoviesListCard};