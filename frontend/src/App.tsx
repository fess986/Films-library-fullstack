import { useEffect } from 'react';
import HistoryRouter from './Components/HistoryRouter/HistoryRouter'
import { useSelector } from 'react-redux';

import { AuthStatus } from './const/const';
// import { useDispatch } from 'react-redux';
import { useAppDispatch } from './store';
import { store } from './store/index';

import { getFilmList } from './store/films/filmsSelector';

import { fetchFilms } from './store/api-actions';
import { setAuthStatus } from './store/user/userSlice';

import  BrowserHistory  from './utils/browser-history'

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
      <HistoryRouter history={BrowserHistory}>
        {routes}
      </HistoryRouter >
    </>
  )
}

export default App
