

import {useLocation} from "react-router-dom";
import {useSelector} from "react-redux";





const GenrePage = () => {

    const {state} = useLocation()

    const {movies} = useSelector(state => state.movieReducer)
    console.log(movies);

    return (
        <div>
            GenrePage
        </div>
    );
};

export {GenrePage};