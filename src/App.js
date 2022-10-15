import {Route, Routes, Navigate} from "react-router-dom";

import {MoviesPage} from "./layouts";
import {MoviesListPage, NotFoundPage} from "./pages";


function App() {
  return (
    <Routes>
        <Route path={'/'} element={<MoviesPage/>} >
            <Route index element={<Navigate to={'MoviesListPage'}/>}/>
            <Route path={'MoviesListPage'} element={<MoviesListPage/>}/>
        </Route>
            <Route path={'*'} element={<NotFoundPage/>}/>
    </Routes>
  );
}

export default App;
