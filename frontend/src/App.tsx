import { useEffect } from 'react';
import HistoryRouter from './Components/HistoryRouter/HistoryRouter'
import { useSelector } from 'react-redux';

import { AuthStatus } from './const/const';
import { useAppDispatch } from './store';

import { getFilmList } from './store/films/filmsSelector';

import { fetchFilms, loginAction } from './store/api-actions';

import BrowserHistory from './utils/browser-history'

import useRoutes from './hooks/useRoutes';
import { useAuth } from './hooks/useAuth';

function App() {
  const dispatch = useAppDispatch();

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  // устанавливаем статус авторизации и получаем userId 1 или null для дальнейшего использования для получения списка любимых фильмов
  useEffect(() => {
    dispatch(loginAction(AuthStatus.NO_AUTH));
  }, [dispatch]);

  const { token, userId } = useAuth();

  console.log('token', token);
  console.log('userId', userId);


  const films = useSelector(getFilmList);
  const routes = useRoutes(films)

  return (
    <>
      <HistoryRouter history={BrowserHistory}>
        {routes}
      </HistoryRouter >
    </>
  )
}

export default App
