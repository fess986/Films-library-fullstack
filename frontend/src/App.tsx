import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { getFilmList } from './store/films/filmsSelector';
import { fetchFilms } from './store/api-actions';
import { useAppDispatch } from './store';
import { store } from './store/index';
import { AuthStatus } from './const/const';
import { setAuthStatus } from './store/user/userSlice';

import useRoutes from './hooks/useRoutes';
import { setActiveFilm } from './store/films/filmsSlice';

function App() {
  const dispatch = useAppDispatch();

  // store.dispatch(setFilmList(Films));
  // store.dispatch(setActiveFilm(Films[0]));

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    store.dispatch(setAuthStatus(AuthStatus.AUTH))
  }, []);

  const films = useSelector(getFilmList);
  const randomFilm = films[Math.floor(Math.random() * films.length)];
  const routes = useRoutes(films)

  useEffect(() => {
    dispatch(setActiveFilm(randomFilm));
  }, [dispatch, randomFilm]);

  return (
    <>
      <BrowserRouter>
        {routes}
      </BrowserRouter >
    </>
  )
}

export default App
