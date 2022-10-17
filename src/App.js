import {Route, Routes, Navigate} from "react-router-dom";

import {MeinMoviesPage} from "./layouts";
import {MovieInfoPage, MoviesListPage, NotFoundPage} from "./pages";


function App() {
  return (
      <Routes>
          <Route path={'/'} element={<MeinMoviesPage/>}>
          <Route index element={<Navigate to={'page/1'}/>}/>
            <Route path={'page/:number'} element={<MoviesListPage/>}/>
              <Route path={'page/:number/info/:id'} element={<MovieInfoPage/>}/>
          </Route>
              <Route path={'*'} element={<NotFoundPage/>}/>
      </Routes>
  );
}

export default App;
