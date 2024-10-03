import { BrowserRouter } from 'react-router-dom'
import { useSelector } from 'react-redux';
import { getFilmList } from './store/films/filmsSelector';
import { getIsAuth } from './store/user/userSelectors';

import useRoutes from './hooks/useRoutes';

function App() {
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
