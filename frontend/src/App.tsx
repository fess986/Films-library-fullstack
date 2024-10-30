import { useEffect } from 'react';
import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';

import { AuthStatus } from './const/const';
import { useAppDispatch } from './store';
import { store } from './store/index';

import { getFilmList } from './store/films/filmsSelector';

import { fetchFilms } from './store/api-actions';
import { setAuthStatus } from './store/user/userSlice';

import useRoutes from './hooks/useRoutes';

function App() {
  const dispatch = useAppDispatch();

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  // устанавливаем статус авторизации
  useEffect(() => {
    store.dispatch(setAuthStatus(AuthStatus.AUTH))
  }, []);

  const films = useSelector(getFilmList);
  const routes = useRoutes(films)

  return (
    <>
      <BrowserRouter>
        {routes}
      </BrowserRouter >
    </>
  )
}

export default App
