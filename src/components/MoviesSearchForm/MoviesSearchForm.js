import {useForm} from "react-hook-form";
import {useDispatch} from "react-redux";

import {movieActions} from "../../redux/slices";


const MoviesSearchForm = () => {

    const{handleSubmit, register} = useForm()

    const dispatch = useDispatch()

    const submit = ({title}) =>{
            dispatch(movieActions.search({title}))
    }

    return (
        <form onSubmit={handleSubmit(submit)}>
            <input type="text" placeholder={'search'} {...register('title')}/>
            <button>Search</button>
        </form>
    );
};

export {MoviesSearchForm};