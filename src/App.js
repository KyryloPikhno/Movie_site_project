import {Route, Routes, Navigate} from "react-router-dom";

import {MeinMoviesPage} from "./layouts";
import {GenrePage, MovieInfoPage, MoviesListPage, NotFoundPage} from "./pages";


function App() {
  return (
        <Routes>
            <Route path={'/'} element={<MeinMoviesPage/>}>
                   <Route index element={<Navigate to={'page/:number'}/>}/>
                <Route path={'/page/:number'} element={<MoviesListPage/>}/>
                   <Route path={'/page/:number/info/:id'} element={<MovieInfoPage/>}/>
                <Route path={'/genre/:id'} element={<GenrePage/>}/>
                   <Route path={'/genre/:id/info/:id'} element={<MovieInfoPage/>}/>
            </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
        </Routes>
  );
}

export default App;
