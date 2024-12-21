import { useEffect } from 'react';
import { useSelector } from 'react-redux';

import HistoryRouter from './Components/HistoryRouter/HistoryRouter'
import { useAuth } from './hooks/useAuth';
import useRoutes from './hooks/useRoutes';
import { useAppDispatch } from './store';
import { fetchFilms } from './store/api-actions';
import { getFilmList } from './store/films/filmsSelector';
import BrowserHistory from './utils/browser-history'

function App() {
  const dispatch = useAppDispatch();
  const { checkAuth } = useAuth();

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilms());
  }, [dispatch]);

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

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
