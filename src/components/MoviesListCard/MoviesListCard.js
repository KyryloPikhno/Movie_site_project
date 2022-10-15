import css from './MoviesListCard.module.css'



const MoviesListCard = ({movie}) => {

    const{id, title, vote_average} = movie

    return (
        <div className={css.card}>
            <div>id: {id}</div>
            <div>title: {title}</div>
            <div>{vote_average}</div>
        </div>
    );
};

export {MoviesListCard};