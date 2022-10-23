import {Route, Routes, Navigate} from "react-router-dom";

import {GenrePage, MovieInfoPage, MoviesListPage, NotFoundPage} from "./pages";
import {MeinMoviesPage} from "./layouts";


function App() {
  return (
        <Routes>
            <Route path={'/'} element={<MeinMoviesPage/>}>
                   <Route index element={<Navigate to={'/all_movies/page/1'}/>}/>
                <Route path={'/all_movies/page/:number'} element={<MoviesListPage/>}/>
                   <Route path={'/all_movies/page/:number/info/:id'} element={<MovieInfoPage/>}/>
                <Route path={'/genre/:id/page/:number'} element={<GenrePage/>}/>
                   <Route path={'/genre/:id/page/:number/info/:id'} element={<MovieInfoPage/>}/>
            </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
  );
}

export default App;
