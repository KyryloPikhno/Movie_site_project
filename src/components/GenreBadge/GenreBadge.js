import  css from './GengeBadge.module.css'


const GenreBadge = ({genre}) => {

    return (
        <div className={css.badge}>
            {genre}
        </div>
    );
};

export {GenreBadge};