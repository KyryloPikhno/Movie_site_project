import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"
import {joiResolver} from "@hookform/resolvers/joi";
import {movieActions} from "../../redux/slices";
import css from './MovieSearchForm.module.css'
import {useEffect} from "react";
import useLocalStorage from "use-local-storage";
import {movieValidator} from "../../validators";




const MoviesSearchForm = () => {

    const [currentPage] = useLocalStorage('page');

    const {currentTheme} = useSelector(state => state.movieReducer)

    const navigate = useNavigate()

    const{handleSubmit, register, reset, formState:{errors,isValid}} = useForm({
        resolver: joiResolver(movieValidator),
        mode:'all'
    })

    const dispatch = useDispatch()

    const submit = ({title}) =>{
            dispatch(movieActions.search({title}))
            navigate('/all_movies/page/1')
            reset()
    }

    useEffect(()=>{
        dispatch(movieActions.search({currentPage}))
    },[currentPage, dispatch])

    return (
            <form onSubmit={handleSubmit(submit)}>
                <input className={currentTheme === 'dark'? css.input : css.lightInput} type="text" placeholder={'Enter movie...'} {...register('title')}/>
                <button className={!isValid? css.noValidButton:'' || currentTheme === 'dark'? css.button : css.lightButton} disabled={!isValid}>Search</button>
                {errors.year && <span>{errors.year.message}</span>}
            </form>
    );
};

export {MoviesSearchForm};