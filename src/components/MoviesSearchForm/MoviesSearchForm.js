import {useForm} from "react-hook-form";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate} from "react-router-dom"

import {movieActions} from "../../redux/slices";
import css from './MovieSearchForm.module.css'


const MoviesSearchForm = () => {

    const {currentTheme} = useSelector(state=> state.movieReducer)

    const navigate = useNavigate()

    const{handleSubmit, register} = useForm()

    const dispatch = useDispatch()

    const submit = ({title}) =>{
            dispatch(movieActions.search({title}))
            navigate('/')
    }

    return (
            <form onSubmit={handleSubmit(submit)}>
                <input className={currentTheme === 'dark'? css.input : css.lightInput} type="text" placeholder={'search movie...'} {...register('title')}/>
                <button className={currentTheme === 'dark'? css.button : css.lightButton}>Search</button>
            </form>
    );
};

export {MoviesSearchForm};