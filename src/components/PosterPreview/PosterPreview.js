import css from './PosterPreview.module.css'


const PosterPreview = ({children, visible, setVisible}) => {

    const rootClasses = [css.poster]

    if(visible){
        rootClasses.push(css.active)
    }

    return (
        <div className={rootClasses.join(' ')}>
           <div className={css.currentPoster}>
               <button onClick={()=>setVisible(false)}>Hide poster</button>
            {children}
           </div>
        </div>
    );
};

export {PosterPreview};