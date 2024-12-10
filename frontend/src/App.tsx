import { useEffect } from 'react';
import HistoryRouter from './Components/HistoryRouter/HistoryRouter'
import { useSelector } from 'react-redux';

import { useAppDispatch } from './store';

import { getFilmList } from './store/films/filmsSelector';

import { fetchFilms, loginAction } from './store/api-actions';

import BrowserHistory from './utils/browser-history'

import useRoutes from './hooks/useRoutes';
import { useAuth } from './hooks/useAuth';

const baseURL = import.meta.env.VITE_BASE_URL;
console.log(baseURL);

function App() {
  const dispatch = useAppDispatch();
  const { checkAuth } = useAuth();

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  // получаем состояние авторизации из локального хранилища, и выполняем соответствующие действия
  useEffect(() => {
    dispatch(loginAction(checkAuth()));
  }, [dispatch, checkAuth]);

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
