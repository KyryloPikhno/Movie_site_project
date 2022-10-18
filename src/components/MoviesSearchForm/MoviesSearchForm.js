import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"

import {movieActions} from "../../redux/slices";
import css from './MovieSearchForm.module.css'


const MoviesSearchForm = () => {

    const navigate = useNavigate()

    const{handleSubmit, register} = useForm()

    const dispatch = useDispatch()

    const submit = ({title}) =>{
            dispatch(movieActions.search({title}))
            navigate('/')
    }

    return (
            <form onSubmit={handleSubmit(submit)}>
                <input className={css.input} type="text" placeholder={'search movie...'} {...register('title')}/>
                <button className={css.button}>Search</button>
            </form>
    );
};

export {MoviesSearchForm};