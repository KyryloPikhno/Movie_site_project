import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";

import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../configs";
import css from './MovieInfo.module.css'


const MovieInfo = () => {

    const {state} = useLocation()
    // console.log(state);
    const {id, title, overview, release_date, adult, popularity, original_language, original_title, genre_ids, poster_path , backdrop_path, video, vote_count, vote_average} = state

    const {genres} = useSelector(state => state.genreReducer)

    const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)

    return (
        <div className={css.container}>
                {backdrop_path && <img  className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
            <div className={css.box}>
                {poster_path && <img className={css.poster} src={`${urls.image_path}${poster_path}`} alt={title}/>}
                <div className={css.info}>
                    <h1 className={css.title}>{title}</h1>
                    <p>{release_date}</p>
                    <p>id: {id}</p>
                         <StarsRating  vote_average={vote_average}/>
                   <p>Popularity: {popularity}</p>
                    <p>Overview: {overview}</p>
                    <p>Adult {adult}</p>
                    <div>
                        {badge && badge.map((genre, index)=> <GenreBadge key={index} genre={genre}/>)}
                    </div>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};