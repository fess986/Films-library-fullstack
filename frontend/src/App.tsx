import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { getFilmList } from './store/films/filmsSelector';
import { getIsAuth } from './store/user/userSelectors';
// import api from './api/api';
import { Films } from './mock/films';
import { store } from './store';
import { setActiveFilm, setFilmList } from './store/films/filmsSlice';
import { AuthStatus } from './const/const';
import { setAuthStatus } from './store/user/userSlice';
import { fetchFilms } from './store/api-actions';
import { useAppDispatch } from './store';

import useRoutes from './hooks/useRoutes';

function App() {
  const dispatch = useAppDispatch();

  // store.dispatch(setAuthStatus(AuthStatus.NO_AUTH))
  // store.dispatch(setFilmList(Films));
  // store.dispatch(setActiveFilm(Films[0]));

  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  const films = useSelector(getFilmList);
  const isAuth = useSelector(getIsAuth);
  
  const routes = useRoutes(isAuth, films)

  return (
    <>
      <BrowserRouter>
      {routes}
      </BrowserRouter >
    </>
  )
}

export default App
