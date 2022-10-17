import {useLocation} from "react-router-dom";


const MovieInfo = () => {

    const {state} = useLocation()

    const {id, title} = state
    // console.log(state);
    return (
        <div>
            <p>id: {id}</p>
            <p>title: {title}</p>
        </div>
    );
};

export {MovieInfo};