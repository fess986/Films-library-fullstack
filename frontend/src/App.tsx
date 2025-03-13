import { useEffect } from 'react'
import { useSelector } from 'react-redux'

import HistoryRouter from './Components/HistoryRouter/HistoryRouter'
import { useAuth } from './hooks/useAuth'
import useRoutes from './hooks/useRoutes'
import { useAppDispatch } from './store'
import { fetchFilmsDB } from './store/api-actions'
import { getFilmList } from './store/films/filmsSelector'
import BrowserHistory from './utils/browser-history'
import { shuffleFilms } from './utils/utils'

function App() {
  const dispatch = useAppDispatch()
  const { checkAuth } = useAuth()

  // фетчим фильмы, по окончанию загрузки устанавливаем флаг isFilmsLoaded в true
  useEffect(() => {
    dispatch(fetchFilmsDB())
  }, [dispatch])

  useEffect(() => {
    checkAuth()
  }, [checkAuth])

  const films = useSelector(getFilmList)
  const shuffledFilms = shuffleFilms(films)
  const routes = useRoutes(shuffledFilms)

  return (
    <>
      <HistoryRouter history={BrowserHistory}>{routes}</HistoryRouter>
    </>
  )
}

export default App
