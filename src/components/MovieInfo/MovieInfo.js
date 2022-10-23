import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";
import {useState} from "react";

import {PosterPreview} from "../PosterPreview/PosterPreview";
import {StarsRating} from "../StarsRating/StarsRating";
import {GenreBadge} from "../GenreBadge/GenreBadge";
import {urls} from "../../configs";
import css from './MovieInfo.module.css'


const MovieInfo = () => {

    const [modal, setModal] = useState(false)

    const {currentTheme} = useSelector(state=> state.movieReducer)

    const {state} = useLocation()

    const {id, title, overview, release_date, adult, popularity, original_language, original_title, genre_ids, poster_path , backdrop_path, video, vote_count, vote_average} = state

    const {genres} = useSelector(state => state.genreReducer)

    const badge = genres.filter(genre => genre_ids.includes(genre.id)).map(item => item.name)

    return (
        <div className={css.container}>
                {backdrop_path && <img  className={css.backdrop} src={`${urls.image_path}${backdrop_path}`} alt={title}/>}
            <div className={currentTheme === 'dark'? css.box : css.lightBox}>
                    <div className={css.wrap}>
                         <PosterPreview visible={modal} setVisible={setModal}>
                             {poster_path && <img className={css.poster} onClick={()=>setModal(true)} src={`${urls.image_path}${poster_path}`} alt={title}/>}
                        </PosterPreview>
                    </div>
                <div className={currentTheme === 'dark'?  css.info : css.lightInfo}>
                    <h1 className={css.title}>{title}</h1>
                    <p>Original language: {original_language}</p>
                    <p>Original title: {original_title}</p>
                    <p>Release date: {release_date}</p>
                    <p>Age limit: {adult? 'For older 18':'for family viewing'}</p>
                    <p>Id: {id}</p>
                         <StarsRating  vote_average={vote_average}/>
                    <p>Popularity: {popularity}</p>
                    <p>Vote count: {vote_count}</p>
                    <p>Overview: {overview}</p>
                    <div className={css.badges}>
                        {badge && badge.map((genre, index)=> <GenreBadge key={index} genre={genre}/>)}
                    </div>
                    <p>Video: {video.toString()} :(</p>
                </div>
            </div>
        </div>
    );
};

export {MovieInfo};