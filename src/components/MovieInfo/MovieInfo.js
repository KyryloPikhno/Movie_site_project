import {useLocation} from "react-router-dom";

import {urls} from "../../configs";
import {StarsRating} from "../StarsRating/StarsRating";
import css from './MovieInfo.module.css'


const MovieInfo = () => {

    const {state} = useLocation()
    console.log(state);
    const {id, title, overview, release_date, adult, popularity, original_language, original_title, poster_path , backdrop_path, video, vote_count, vote_average} = state
    // console.log(state);
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

                </div>
            </div>
        </div>
    );
};

export {MovieInfo};